import { createSlice } from '@reduxjs/toolkit';
import { createArray } from '../../utils/array';
import { BLOCK_FLAG } from '../../utils/constants';
import { plantMine, searchNearbyMine } from '../../utils/logic';
import { initialState } from './state';

const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    configuration: (state, action) => {
      state.width = action.payload.width;
      state.height = action.payload.height;
      state.mineCount = action.payload.mineCount;
    },
    resetBoard: (state) => {
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
       *    주변에 지뢰수가 0인 칸을 전부 열어준다(bfs)
       *
       *  1-3. normalCount가 0인 경우
       *    게임종료. (승리)
       *
       * 2. 지뢰가 있는 경우
       *    게임종료. (패배)
       *
       */

      const { index } = action.payload;
      const block = state.board[index];
      switch (block) {
        case BLOCK_FLAG.NORMAL:
          state.board[index] = searchNearbyMine(state.board, index, state.width);
          break;
        case BLOCK_FLAG.MINE:
          break;
        default:
          break;
      }
    },
  },
});

export default gameSlice;
