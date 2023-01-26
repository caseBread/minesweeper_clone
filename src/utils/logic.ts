import { BLOCK_FLAG } from './constants';

export const plantMine = (board: number[], mineCount: number): number[] => {
  const mines = shuffleMine(board.length, mineCount);
  const minePlantedBoard = board.map((x, i) => (mines.indexOf(i + 1) ? BLOCK_FLAG.MINE : BLOCK_FLAG.NORMAL));
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

export const shuffleMine = (length: number, mineCount: number): number[] => {
  let shuffleArray: number[] = [];
  let i = 0;
  while (i < mineCount) {
    const n = Math.floor(Math.random() * length) + 1;
    if (!sameNumber(shuffleArray, n)) {
      shuffleArray.push(n);
    }
  }
  return shuffleArray;
};
