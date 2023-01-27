import { getX, getY } from './array';
import { BLOCK_FLAG, nearByDirection } from './constants';

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

const isNearbyIndex = (nearByDirection: number[][], index: number, nowIndex: number, width: number) => {
  const [x, y] = [getX(width, index), getY(width, index)];
  const [nowX, nowY] = [getX(width, nowIndex), getY(width, nowIndex)];
  let ok = false;
  nearByDirection.forEach((direct) => {
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
    if (isNearbyIndex(nearByDirection, index, i, width)) {
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
