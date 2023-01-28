import { createArray, getIndex, getX, getY } from './array';
import { BLOCK_FLAG, nearbyDirection } from './constants';

export const plantMine = (board: number[], mineCount: number, index?: number): number[] => {
  const mines = shuffleMine(board.length, mineCount, index);
  const minePlantedBoard = board.map((x, i) => (mines.indexOf(i) !== -1 ? BLOCK_FLAG.MINE : BLOCK_FLAG.NORMAL));
  return minePlantedBoard;
};

const sameNumber = (shuffleArray: number[], n: number): boolean => {
  for (let i = 0; i < shuffleArray.length; i++) {
    if (n === shuffleArray[i]) {
      return true;
    }
  }
  return false;
};

export const shuffleMine = (length: number, mineCount: number, donotMineIndex?: number): number[] => {
  const shuffleArray = [];
  let i = 0;
  while (i < mineCount) {
    const n = Math.floor(Math.random() * length);
    if (!sameNumber(shuffleArray, n) && donotMineIndex !== n) {
      shuffleArray.push(n);
      i++;
    }
  }
  return shuffleArray;
};

const isNearbyIndex = (nearbyDirection: number[][], index: number, nowIndex: number, width: number) => {
  const [x, y] = [getX(width, index), getY(width, index)];
  const [nowX, nowY] = [getX(width, nowIndex), getY(width, nowIndex)];
  let ok = false;
  nearbyDirection.forEach((direct) => {
    if (x + direct[0] === nowX && y + direct[1] === nowY) {
      ok = true;
      return;
    }
  });
  return ok;
};

const getNearbyIndexList = (board: number[], index: number, width: number): number[] => {
  const nearbyIndexList = [];
  for (let i = 0; i < board.length; i++) {
    if (isNearbyIndex(nearbyDirection, index, i, width)) {
      nearbyIndexList.push(i);
    }
  }

  return nearbyIndexList;
};

export const searchNearbyMine = (board: number[], index: number, width: number): number => {
  const nearbyIndexList = getNearbyIndexList(board, index, width);
  const nearbyMineCount = nearbyIndexList.reduce((acc, cur, idx) => {
    if (board[cur] === BLOCK_FLAG.MINE) return (acc += 1);
    else return acc;
  }, 0);

  console.log(index, nearbyMineCount, nearbyIndexList);

  return nearbyMineCount;
};

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

  while (queue) {
    const now = queue.shift();
    if (now === undefined) break;
    const [x, y] = [getX(width, now), getY(width, now)];
    for (const direct of nearbyDirection) {
      const [dx, dy] = direct;
      const nowIndex = getIndex(width, x + dx, y + dy);
      if (0 <= x + dx && x + dx < width && 0 <= y + dy && y + dy < height) {
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
