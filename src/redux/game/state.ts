import { createArray } from '@utils/array';
import { BLOCK_FLAG, DEFAULT_BOARD_HEIGHT, DEFAULT_BOARD_WIDTH, DEFAULT_MINE_COUNT, GAME_FLAG } from '@utils/constants';

export interface IinitialState {
  width: number; // 보드의 가로길이. 환경설정 시 변경
  height: number; // 보드의 세로길이. 환경설정 시 변경
  board: number[]; // 각 칸의 상태들 저장, 게임 리셋 시 변경
  mineCount: number; // 설정한 지뢰개수, 환경설정 시 변경
  nowMineCount: number; // 현재 찾아야하는 지뢰 개수, 게임 중 변경
  normalCount: number; // 지뢰가 아닌 칸중 아직 열지 않은 칸의 개수 (게임 승리조건을 체크하기 위함), 게임할 때 변경
  gameState: number; // 게임의 상태 저장 (타이머, 표정변화 로직에 사용)
}

export const initialState: IinitialState = {
  width: DEFAULT_BOARD_WIDTH,
  height: DEFAULT_BOARD_HEIGHT,
  board: createArray(DEFAULT_BOARD_WIDTH, DEFAULT_BOARD_HEIGHT, BLOCK_FLAG.NORMAL),
  mineCount: DEFAULT_MINE_COUNT,
  nowMineCount: DEFAULT_MINE_COUNT,
  normalCount: DEFAULT_BOARD_WIDTH * DEFAULT_BOARD_HEIGHT - DEFAULT_MINE_COUNT,
  gameState: GAME_FLAG.READY,
};
