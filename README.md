# Web MineSweeper

<img src="https://user-images.githubusercontent.com/92029332/217206721-582ab015-69bd-47c3-be42-958a574fdaa8.gif" width="200" height="200">

## 프로젝트 소개

윈도우 기본게임이었던 지뢰찾기 게임을 웹 상에서 구현한 프로젝트입니다.

custom hooks, VAC 패턴 등의 방법을 통해 코드 가독성을 높히는 방법에 대해 많이 고민해본 프로젝트 입니다.


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

- [x] 블럭을 클릭할 때 주변에 있는 지뢰의 개수를 표시
- [x] 타이머
- [x] 난이도 변경
    - [ ] 초보자, 중급자, 상급자 모드
    - [x] 커스텀 모드 (가로, 세로, 지뢰 수 조정)
- [x] 오른쪽 클릭 깃발(지뢰카운트O) 기능
    - [x] 오른쪽 클릭 물음표(지뢰카운트X) 기능
- [x] 첫번째 빈칸을 열었을 경우 지뢰가 터지지 않음
