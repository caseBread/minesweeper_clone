export const BLOCK_FLAG = {
  OPENED: 0,
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  MINE: -6,
} as const;

export const DEFAULT_BOARD_WIDTH = 9 as const;
export const DEFAULT_BOARD_HEIGHT = 9 as const;
export const DEFAULT_MINE_COUNT = 10 as const;
