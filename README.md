# [Zen-UI](https://zenuix.github.io/docs)

<div align="center" style="display: flex; gap: 6px; justify-content: center;">
  <a href="https://github.com/zenuix/zen-ui/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license: MIT" />
  </a>
  <a href="https://www.npmjs.com/package/@zenuix/zen-ui" rel="nofollow">
    <img src="https://img.shields.io/npm/v/@zenuix/zen-ui.svg" alt="version" />
  </a>
  <a href="https://www.npmjs.com/package/@zenuix/zen-ui" rel="nofollow">
    <img src="https://img.shields.io/npm/dw/@zenuix/zen-ui.svg" alt="npm" />
  </a>
  <a href="https://github.com/zenuix/Zen-UI" rel="nofollow">
    <img src="https://img.shields.io/github/stars/zenuix/Zen-UI" alt="stars" />
  </a>
  <a href="https://github.com/sponsors/zenuix" rel="nofollow">
    <img src="https://img.shields.io/badge/sponsor-github-ea4aaa.svg?style=flat-square" alt="GitHub Sponsor" />
  </a>
</div>

## 미니멀한 헤드리스 UI 컴포넌트 라이브러리

Zen-UI는 현대적인 웹 애플리케이션을 위한 완전한 접근성을 갖춘 헤드리스 UI 컴포넌트 라이브러리입니다. 유연하고 맞춤형 웹 인터페이스를 구축하는 데 필요한 모든 기능을 제공합니다.

### ✨ 특징

- **헤드리스 디자인**: 스타일이 없는 UI 컴포넌트를 제공하여 원하는 디자인을 적용 가능
- **접근성 지원**: 웹 표준 접근성 규칙을 준수하여 사용자 경험 향상
- **가벼운 패키지**: 불필요한 스타일이나 종속성이 없어 프로젝트 크기를 최소화
- **다양한 유틸리티 제공**: 폼 컨트롤, 다이얼로그, 드롭다운 등 핵심 UI 기능 포함
- **타입스크립트 지원**: 타입을 준수하여 개발되어 코드 안정성을 높임

## 📦 설치

```bash
# npm
npm install @zenuix/zen-ui

# yarn
yarn add @zenuix/zen-ui

# pnpm
pnpm add @zenuix/zen-ui
```

## 🚀 사용 방법

```tsx
import { Button } from 'zenix';

export default function App() {
  return <Button onClick={() => alert('Clicked!')}>Click me</Button>;
}
```

## 🗂️ 컴포넌트

Zen-UI는 다음과 같은 컴포넌트를 제공합니다:

- 레이아웃
  - **Accordion**: 아코디언 패널
  - **Tabs**: 탭 인터페이스
  - **Pagination**: 페이지네이션
- 네비게이션
  - **Breadcrumb**: 브레드크럼 네비게이션
- 인터랙션 (또는 "컨트롤")
  - **Dropdown**: 드롭다운 메뉴
- 오버레이
  - **Modal**: 모달 창
  - **Tooltip**: 툴팁 UI

## 🤝 기여 방법

1. 이 저장소를 포크합니다.
2. 새로운 기능을 위한 브랜치를 생성합니다: `git checkout -b feature/새로운기능`
3. 변경 사항을 커밋합니다: `git commit -m '새로운 기능 추가'`
4. 브랜치에 푸시합니다: `git push origin feature/새로운기능`
5. 풀 리퀘스트를 생성합니다.

## 📜 라이선스

Zenix는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](./LICENSE) 파일을 확인하세요.

## 🆘 지원

- [GitHub 이슈](https://github.com/zenuix/zen-ui/issues)
