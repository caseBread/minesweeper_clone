# Web MineSweeper

## 로컬 실행 방법

1. npm 설치
```
npm install
```

2. 프로젝트 빌드 후 실행
```
npm run build
npx serve -s build
```

## 기능 목록

- [x] 타이머
- [x] 난이도 변경
    - [ ] Beginner (8X8), Intermediate (16X16), Expert (32X16)
    - [x] Custom (가로, 세로, 지뢰 수 조정 가능)
- [x] 오른쪽 클릭 깃발(지뢰카운트O) 기능
    - [x] 오른쪽 클릭 물음표(지뢰카운트X) 기능
- [x] 첫번째 빈칸을 열었을 경우 지뢰가 터지지 않음