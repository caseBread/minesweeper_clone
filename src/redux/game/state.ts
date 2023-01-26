import { createArray } from '../../utils/array';
import { BLOCK_FLAG, DEFAULT_BOARD_HEIGHT, DEFAULT_BOARD_WIDTH, DEFAULT_MINE_COUNT } from '../../utils/constants';

export interface IinitialState {
  width: number;
  height: number;
  board: number[];
  mineCount: number;
  openedCount: number;
}

export const initialState: IinitialState = {
  width: DEFAULT_BOARD_WIDTH,
  height: DEFAULT_BOARD_HEIGHT,
  board: createArray(DEFAULT_BOARD_WIDTH, DEFAULT_BOARD_HEIGHT, BLOCK_FLAG.NORMAL),
  mineCount: DEFAULT_MINE_COUNT,
  openedCount: DEFAULT_BOARD_WIDTH * DEFAULT_BOARD_HEIGHT - DEFAULT_MINE_COUNT,
};
