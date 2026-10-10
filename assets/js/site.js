(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const themeSymbol = document.querySelector('.theme-symbol');
  const storageKey = 'esack-theme';
  let storedTheme = null;
  try { storedTheme = localStorage.getItem(storageKey); } catch (_) {}
  const preferred = storedTheme === 'dark' || storedTheme === 'light'
    ? storedTheme
    : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const setTheme = (theme) => {
    root.dataset.theme = theme;
    if (themeButton) {
      const isDark = theme === 'dark';
      themeButton.setAttribute('aria-pressed', String(isDark));
      themeButton.setAttribute('aria-label', isDark ? '밝은 화면으로 전환' : '어두운 화면으로 전환');
      if (themeSymbol) themeSymbol.textContent = isDark ? '☀' : '☾';
    }
  };
  setTheme(preferred);
  if (themeButton) themeButton.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem(storageKey, next); } catch (_) {}
  });
  const filters = Array.from(document.querySelectorAll('.filter-button'));
  if (filters.length) {
    const posts = Array.from(document.querySelectorAll('[data-post-category]'));
    const empty = document.querySelector('.archive-empty');
    const known = filters.map(button => button.dataset.filter);
    const applyFilter = (category, updateUrl) => {
      const selected = known.includes(category) ? category : '전체';
      filters.forEach(button => {
        const active = button.dataset.filter === selected;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
      });
      let visible = 0;
      posts.forEach(post => {
        const categories = (post.dataset.postCategory || '').split(/s+/);
        const show = selected === '전체' || categories.includes(selected);
        post.hidden = !show;
        if (show) visible++;
      });
      if (empty) empty.hidden = visible > 0;
      if (updateUrl) {
        const u = new URL(window.location.href);
        if (selected === '전체') u.searchParams.delete('category');
        else u.searchParams.set('category', selected);
        history.replaceState(null, '', u.pathname + u.search + u.hash);
      }
    };
    filters.forEach(button => button.addEventListener('click', () => applyFilter(button.dataset.filter, true)));
    const query = new URLSearchParams(window.location.search).get('category') || '전체';
    applyFilter(query, false);
  }
})();
