# Wanted PreOnboarding Frontend Challenge

![미리보기](https://github.com/1lsang/wanted-frontend-challenge/blob/main/asset/wanted-frontend-challenge.gif)

## 🎯 Requirements

- add 기능
- remove 기능
- 컴포넌트 분리
- redux 사용

## 📁 Structure

```shell
src
├── App.css
├── App.tsx
├── components
│   ├── Form
│   │   ├── Button.tsx
│   │   ├── Form.tsx
│   │   ├── Input.tsx
│   │   └── index.ts
│   ├── List
│   │   ├── Container.tsx
│   │   ├── Item.tsx
│   │   └── index.ts
│   └── common
│       └── WantedLogo.tsx
├── index.css
├── main.tsx
└── store
    ├── index.ts
    └── todoSlice.ts
```

- **components**: 컴포넌트 모음
    - **List**: 할일 목록과 관련된 컴포넌트 모음
    - **Form**: 할일 추가와 관련된 컴포넌트 모음
    - **common**: 공용으로 사용되는 컴포넌트 모음
- **store**: Redux store와 관련된 파일 모음
    - **index.ts**: store 생성
    - **todoSlice.ts**: todo state와 관련된 reducer, action 생성