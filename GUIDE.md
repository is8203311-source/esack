# 이삭 보관통 — 발행 안내

GitHub Pages + Jekyll로 만든 개인 글 아카이브입니다.

## 사이트 열기

https://is8203311-source.github.io/esack/

처음 한 번은 GitHub 저장소에서 **Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save**를 선택해야 합니다. 공개까지 몇 분 걸릴 수 있습니다.

## 새 글 올리기

1. 저장소에서 `_posts` 디렉터리를 만듭니다(없을 경우).
2. `_templates/post.md`를 참고하여 `_posts/2026-10-10-example.md` 같은 새 파일을 만듭니다.
3. 날짜와 제목, 본문, 주제를 작성한 뒤 커밋합니다.
4. 글은 첫 화면, 글 보관함, RSS에 자동 반영됩니다.

```markdown
---
layout: post
title: "제목"
date: 2026-10-10 12:00:00 +0900
categories: [성경]
description: "짧은 소개"
---

여기에 본문을 작성합니다.
```

주제 선택: `철학`, `성경`, `문학`, `비평`.

파일명은 영문 및 숫자, 하이픈으로 쓰는 것을 권장합니다. 본문은 한국어로 작성할 수 있습니다.

## 디자인 변경

- `_layouts/default.html`: 공통 헤더와 하단
- `_layouts/post.html`: 글 읽는 화면
- `index.html`: 첫 화면
- `archive.html`: 글 목록과 필터
- `about.html`: 소개
- `assets/css/style.css`: 전체 스타일
- `assets/js/site.js`: 다크 모드와 주제별 필터
- `_config.yml`: 사이트 주소와 기본 정보

실제 글은 게시하지 않았습니다. 템플릿은 게시되지 않는 `_templates`에 보관되어 있습니다.
