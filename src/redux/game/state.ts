import { createArray } from '../../utils/array';
import { BLOCK_FLAG, DEFAULT_BOARD_HEIGHT, DEFAULT_BOARD_WIDTH, DEFAULT_MINE_COUNT } from '../../utils/constants';

export interface IinitialState {
  width: number; // 환경설정 시 변경
  height: number; // 환경설정 시 변경
  board: number[]; // 게임 리셋 시 변경
  mineCount: number; // 환경설정 시 변경
  normalCount: number; // 게임할 때 변경
}

export const initialState: IinitialState = {
  width: DEFAULT_BOARD_WIDTH,
  height: DEFAULT_BOARD_HEIGHT,
  board: createArray(DEFAULT_BOARD_WIDTH, DEFAULT_BOARD_HEIGHT, BLOCK_FLAG.NORMAL),
  mineCount: DEFAULT_MINE_COUNT,
  normalCount: DEFAULT_BOARD_WIDTH * DEFAULT_BOARD_HEIGHT - DEFAULT_MINE_COUNT,
};
