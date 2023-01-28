export const BLOCK_FLAG = {
  OPENED: 0,
  NORMAL: -1,
  QUESTION: -2,
  MARK: -3,
  QUESTION_MINE: -4,
  MARK_MINE: -5,
  MINE: -6,
  DISCOVERED_MINE: -7,
} as const;

export const GAME_FLAG = {
  READY: 0,
  RUNNING: 1,
  DEFEAT: 2,
  WIN: 3,
} as const;

export const DEFAULT_BOARD_WIDTH = 8 as const;
export const DEFAULT_BOARD_HEIGHT = 8 as const;
export const DEFAULT_MINE_COUNT = 10 as const;

// 방향을 미리 정의 (bfs에 활용)
export const nearbyDirection = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];
