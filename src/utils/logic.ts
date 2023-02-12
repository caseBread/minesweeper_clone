import { createArray, getIndex, getX, getY } from './array';
import { BLOCK_FLAG, nearbyDirection } from './constants';

const sameNumber = (shuffleArray: number[], n: number): boolean => {
  for (let i = 0; i < shuffleArray.length; i++) {
    if (n === shuffleArray[i]) {
      return true;
    }
  }
  return false;
};

const shuffleMine = (length: number, mineCount: number, donotMineIndex?: number): number[] => {
  const shuffleArray = [];
  let i = 0;
  while (i < mineCount) {
    // Math.random()을 이용하여 랜덤하게 지뢰 위치를 선택합니다.
    const n = Math.floor(Math.random() * length);

    // 여러개의 지뢰가 같은 칸에 존재할 수 없습니다.
    // 첫번째 빈칸을 열었을 경우 지뢰가 터지지 않습니다.
    if (!sameNumber(shuffleArray, n) && donotMineIndex !== n) {
      shuffleArray.push(n);
      i++;
    }
  }
  return shuffleArray;
};

// plantMine : 지뢰의 위치를 랜덤으로 지정하는 함수입니다.
// shuffleMine이라는 함수를 통해 마인이 들어갈 위치를 랜덤하게 뽑습니다.
export const plantMine = (board: number[], mineCount: number, index?: number): number[] => {
  const mines = shuffleMine(board.length, mineCount, index);
  const minePlantedBoard = board.map((x, i) => (mines.includes(i) ? BLOCK_FLAG.MINE : BLOCK_FLAG.NORMAL));
  return minePlantedBoard;
};

// isNearbyIndex : 특정 칸의 근처 index인지 판단하는 함수입니다.
const isNearbyIndex = (nearbyDirection: number[][], index: number, nowIndex: number, width: number) => {
  const [x, y] = [getX(width, index), getY(width, index)];
  const [nowX, nowY] = [getX(width, nowIndex), getY(width, nowIndex)];
  let ok = false;
  nearbyDirection.forEach((direct) => {
    if (x + direct[0] === nowX && y + direct[1] === nowY) {
      ok = true;
    }
  });
  return ok;
};

// getNearbyIndexList : 특정 칸의 근처 index 리스트를 반환합니다.
// board를 2차원배열이 아닌 1차원배열로 저장하다보니 따로 근처의 칸을 계산하는 로직을 추가해주었습니다.
const getNearbyIndexList = (board: number[], index: number, width: number): number[] => {
  const nearbyIndexList = [];
  for (let i = 0; i < board.length; i++) {
    if (isNearbyIndex(nearbyDirection, index, i, width)) {
      nearbyIndexList.push(i);
    }
  }

  return nearbyIndexList;
};

const isMineBlock = (block: number): boolean => {
  return block === BLOCK_FLAG.MINE || block === BLOCK_FLAG.MARK_MINE || block === BLOCK_FLAG.QUESTION_MINE;
};

// searchNearbyMine : 특정 칸의 근처 지뢰 수를 반환합니다.
export const searchNearbyMine = (board: number[], index: number, width: number): number => {
  const nearbyIndexList = getNearbyIndexList(board, index, width);
  const nearbyMineCount = nearbyIndexList.reduce((acc, cur, idx) => {
    if (isMineBlock(board[cur])) return (acc += 1);
    else return acc;
  }, 0);

  return nearbyMineCount;
};

// getOpenedBlockList : 한 블럭 클릭 시 오픈해야할 블록을 계산해주는 함수
// 주변에 지뢰가 있다면 한칸만 return 이 되고,
// 주변에 지뢰가 없다면 지뢰가 없는 붙어있는 칸을 모두 반환합니다. (bfs를 이용하여 계산합니다.)
export const getOpenedBlockList = (board: number[], startIndex: number, width: number, height: number): number[] => {
  const visited: boolean[] = createArray(width, height, false);
  const queue: number[] = [];
  const openedBlockList: number[] = [];

  // start Index에도 똑같은 로직 적용
  visited[startIndex] = true;
  openedBlockList.push(startIndex);
  if (searchNearbyMine(board, startIndex, width) === 0) {
    queue.push(startIndex);
  }

  while (queue.length !== 0) {
    const now = queue.shift();
    if (now === undefined) break;
    const [x, y] = [getX(width, now), getY(width, now)];
    for (const direct of nearbyDirection) {
      const [dx, dy] = direct;
      const nowIndex = getIndex(width, x + dx, y + dy);
      if (x + dx >= 0 && x + dx < width && y + dy >= 0 && y + dy < height) {
        // 방문하지 않았을 경우 result list에 넣는다.
        // 이미 제거했던 칸이면 list에 넣지 않는다.
        if (!visited[nowIndex] && board[nowIndex] < 0) {
          visited[nowIndex] = true;
          openedBlockList.push(nowIndex);

          // 방문하지 않았고 근처지뢰개수가 0이면 queue에도 넣는다.
          if (searchNearbyMine(board, nowIndex, width) === 0) {
            queue.push(nowIndex);
          }
        }
      }
    }
  }

  return openedBlockList;
};

export const getMineList = (board: number[]): number[] => {
  const mineList: number[] = [];
  board.forEach((block, idx) => {
    if (block === BLOCK_FLAG.MINE) {
      mineList.push(idx);
    }
  });
  return mineList;
};
