import { createSlice } from '@reduxjs/toolkit';
import { createArray } from '../../utils/array';
import { BLOCK_FLAG, GAME_FLAG } from '../../utils/constants';
import { getOpenedBlockList, plantMine, searchNearbyMine } from '../../utils/logic';
import { RootState } from '../store';
import { initialState } from './state';

const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    configuration: (state, action) => {
      state.width = action.payload.width;
      state.height = action.payload.height;
      state.mineCount = action.payload.mineCount;
      state.board = plantMine(createArray(state.width, state.height, BLOCK_FLAG.NORMAL), state.mineCount);
      state.normalCount = state.width * state.height - state.mineCount;
      state.gameState = GAME_FLAG.READY;
    },
    resetBoard: (state) => {
      state.gameState = GAME_FLAG.READY;
      state.board = plantMine(createArray(state.width, state.height, BLOCK_FLAG.NORMAL), state.mineCount);
      state.normalCount = state.width * state.height - state.mineCount;
    },
    activeBlock: (state, action) => {
      /**
       * 1. 지뢰가 없는 경우
       *  1-1. 주변 지뢰수가 0이 아닌 경우
       *    주변 지뢰수를 보여준다
       *
       *  1-2. 주변 지뢰수가 0인 경우
       *    주변에 지뢰수가 0인 칸을 전부 열어줍니다(bfs)
       *
       *  (1-1, 1-2는 같은 로직 (getOpenedBlockList)로 처리합니다.)
       *
       *
       *  1-3. normalCount가 0인 경우
       *    게임종료. (승리)
       *
       * 2. 지뢰가 있는 경우
       *    해당 지뢰를 DISCOVERED_MINE으로 바꾼다.
       *    다른 지뢰들도 보여준다.
       *    게임종료. (패배)
       *
       *
       */

      const { index }: { index: number } = action.payload;

      if (state.gameState === GAME_FLAG.READY) {
        state.gameState = GAME_FLAG.RUNNING;
        state.board = plantMine(state.board, state.mineCount, index);
      }

      const blockFlag = state.board[index];

      switch (blockFlag) {
        // 한 칸의 근처지뢰개수 계산
        case BLOCK_FLAG.NORMAL:
          /**
           * 하나의 normal칸을 클릭 시 주변에 0이있으면 같이공개 + 없으면 하나만 공개
           */
          const openedBlockList = getOpenedBlockList(state.board, index, state.width, state.height);
          openedBlockList.forEach((blockIndex) => {
            state.board[blockIndex] = searchNearbyMine(state.board, blockIndex, state.width);
            state.normalCount--;
          });

          break;
        // 게임 패배 로직
        case BLOCK_FLAG.MINE:
          state.board[index] = BLOCK_FLAG.DISCOVERED_MINE;
          state.gameState = GAME_FLAG.DEFEAT;
          break;
        default:
          break;
      }

      // 게임 승리 로직
      if (state.normalCount === 0) {
        state.gameState = GAME_FLAG.WIN;
      }
    },
  },
});

export const { configuration, resetBoard, activeBlock } = gameSlice.actions;

export const selectWidth = (state: RootState) => state.game.width;
export const selectHeight = (state: RootState) => state.game.height;
export const selectBoard = (state: RootState) => state.game.board;
export const selectMineCount = (state: RootState) => state.game.mineCount;
export const selectNormalCount = (state: RootState) => state.game.normalCount;
export const selectGameState = (state: RootState) => state.game.gameState;

export default gameSlice;
