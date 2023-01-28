# 지뢰찾기 클론 과제

## 실행 방법

1. npm 설치
```
npm install
```

2. 프로젝트 실행
```
npm start
```

## 요구사항
- [x] 첫번째 빈칸을 열었을 경우에는 지뢰가 터지면 안됩니다
- [x] 타이머 (**추가 과제**)
- [x] 난이도 변경이 가능해야 합니다
    - [ ] Beginner (8X8), Intermediate (16X16), Expert (32X16)
    - [x] Custom (가로, 세로, 지뢰 수 조정 가능)
        - [x] 50 x 50, 지뢰 10개 플레이가 가능해야함
- [x] 오른쪽 클릭 깃발 기능 (**추가 과제**)
    - [x] 오른쪽 클릭 물음표 기능

## 시연영상

https://youtu.be/1E8W83ntOA8



## 프로젝트 설명

### 컴포넌트 구조

VAC(View Asset Component) 패턴을 사용하여 View와 비즈니스 로직 및 전역상태 관련 로직을 분리하였습니다.
전역상태를 통한 게임의 상태를 관리하는 작업이 무거워질 것으로 예상되어 view부분과 분리해주는 작업을 통해 컴포넌트의 가독성을 높혀주었습니다.



각 컴포넌트는 최대 4개의 파일로 이루어집니다.

- index.tsx : 비즈니스 로직 및 전역상태 관련 로직
- style.ts : style 관련 코드
- type.ts : props의 타입이나 기타 컴포넌트에 사용되는 interface를 정의
- view.tsx : 해당 컴포넌트의 View 로직을 담당.


### 전역상태 구조

- state 구조
    - width : 게임 판의 가로 블럭 수
    - height : 게임 판의 세로 블럭 수
    - mineCount : 총 지뢰 개수
    - nowMineCount : 아직 찾지못한 지뢰 개수
    - board : 각 블럭의 상태를 배열로 저장
    - normalCount : 지뢰가 아닌 칸의 개수
    - gameState : 현재 게임의 상태 (준비, 게임중, 패배, 승리)

- reducer
    - configuration : 게임의 설정을 담당하는 리듀서, 보드의 가로,세로 및 지뢰 개수 조절 가능.
    - resetBoard : 게임 초기화, 타이머 초기화, 게임 재시작
    - activeBlock : 한 블럭을 클릭했을 때 블럭이 열리는 로직을 담당. (핵심 리듀서)
    - controlMark : 깃발 및 물음표 표시 기능을 처리

### 고민했던 부분

* board의 경우 **일차원 배열**로 관리해주었습니다. 이차원 배열인 경우 뷰컴포넌트에서 각 블럭을 렌더링하기가 까다로웠고, 블럭의 위치를 두 변수보다 한 변수로 관리하는것이 각 블럭의 상태를 관리하는 데 더 용이하다고 생각했습니다. 
* board를 일차원 배열로 렌더링하게 되면 제한이 없을 때 블럭은 한줄로 렌더링 될 것입니다. 따라서, 저는 **width를 동적으로 정의**해주면서 이러한 문제를 해결하였습니다.

```javascript
// components/Board/style.ts

export const Wrapper = styled.div<{ width: number }>`
  width: ${(props) => `${props.width}rem`};
`;
```

* **Timer**는 게임 상태에 따라 타이머가 동작하거나 멈춰야합니다. 따라서, Timer 로직 안에 gameState를 Props로 넣어주고 gameState가 바뀔 때마다 렌더링을 해주는 방식으로 구현하였습니다. 그리고, Timer가 동작하는 useEffect 내에서 setInterval함수와 clearInterval함수를 분리하여 gameState의 상태에 따라 각각 동작하도록 설정하였습니다. 또한, 게임이 초기화 될 경우 Timer도 초기화해주었습니다.

* 첫번째 빈칸을 열었을 경우 지뢰가 터지지 않도록 게임상태가 READY인 상태에서 activeBlock Reducer가 동작할 때 지뢰를 심어주었습니다. 지뢰를 심는 과정에서 해당 index의 블럭에 지뢰를 못심게 막아주었습니다.
```javascript
// utils/logic.ts

const shuffleMine = (length: number, mineCount: number, donotMineIndex?: number): number[] => {
  const shuffleArray = [];
  let i = 0;
  while (i < mineCount) {
    const n = Math.floor(Math.random() * length);
    
    // 지뢰가 심어지는 칸이 donotMineIndex(첫번째심는칸)일 경우 지뢰 심는 것을 막아주었습니다.
    if (!sameNumber(shuffleArray, n) && donotMineIndex !== n) {
      shuffleArray.push(n);
      i++;
    }
  }
  return shuffleArray;
};
```

* 블럭의 상태는 전역상태 내 board라는 변수 하나로 관리합니다. 따라서, **깃발 기능**도 board라는 변수를 이용해야 합니다. 하지만, 깃발상태를 저장하기 위해 board를 변경하게 되면 원래 있던 정보(지뢰인지 아닌지)가 깃발상태로 변하게 됩니다. 이를 방지해주기 위해 지뢰o+깃발o / 지뢰o+깃발x / 지뢰x+깃발o / 지뢰x+깃발x 이 네가지 경우로 나누어 board변수에 블럭의 상태를 저장해주었습니다. 여기에 물음표기능까지 추가해주어 총 6개 종류의 상태로 관리하였습니다. (발견된 지뢰와 오픈된 블럭까지 합치면 8가지 상태)