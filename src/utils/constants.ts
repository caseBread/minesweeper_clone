export const BLOCK_FLAG = {
  OPENED: 0,
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  MINE: -6,
} as const;

export const GAME_FLAG = {
  READY: 0,
  RUNNING: 1,
  DEFEAT: 2,
  WIN: 3,
} as const;

export const DEFAULT_BOARD_WIDTH = 9 as const;
export const DEFAULT_BOARD_HEIGHT = 9 as const;
export const DEFAULT_MINE_COUNT = 10 as const;
/** 게임 state
 * 0 : 게임 시작 전
 * 1 : 게임 중
 * 2 : 게임 패배
 * 3 : 게임 승리
 */

export const nearByDirection = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];
