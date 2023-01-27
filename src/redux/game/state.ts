import { createArray } from '../../utils/array';
import {
  BLOCK_FLAG,
  DEFAULT_BOARD_HEIGHT,
  DEFAULT_BOARD_WIDTH,
  DEFAULT_MINE_COUNT,
  GAME_FLAG,
} from '../../utils/constants';
import { RootState } from '../store';

export interface IinitialState {
  width: number; // 환경설정 시 변경
  height: number; // 환경설정 시 변경
  board: number[]; // 게임 리셋 시 변경
  mineCount: number; // 환경설정 시 변경
  normalCount: number; // 게임할 때 변경
  gameState: number;
}

export const initialState: IinitialState = {
  width: DEFAULT_BOARD_WIDTH,
  height: DEFAULT_BOARD_HEIGHT,
  board: createArray(DEFAULT_BOARD_WIDTH, DEFAULT_BOARD_HEIGHT, BLOCK_FLAG.NORMAL),
  mineCount: DEFAULT_MINE_COUNT,
  normalCount: DEFAULT_BOARD_WIDTH * DEFAULT_BOARD_HEIGHT - DEFAULT_MINE_COUNT,
  gameState: GAME_FLAG.READY,
};

export const selectWidth = (state: RootState) => state.game.width;
export const selectHeight = (state: RootState) => state.game.height;
export const selectBoard = (state: RootState) => state.game.board;
export const selectMineCount = (state: RootState) => state.game.mineCount;
export const selectNormalCount = (state: RootState) => state.game.normalCount;
export const selectGameState = (state: RootState) => state.game.gameState;
