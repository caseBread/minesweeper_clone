import { BLOCK_FLAG, GAME_FLAG } from './constants';

export const getBlockState = (blockFlag: number, gameState: number): string | null => {
  switch (blockFlag) {
    case 8:
    case 7:
    case 6:
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
      return String(blockFlag);
    case 0:
    case BLOCK_FLAG.NORMAL:
      return null;
    case BLOCK_FLAG.QUESTION_MINE:
    case BLOCK_FLAG.QUESTION:
      return '?';
    case BLOCK_FLAG.MARK_MINE:
    case BLOCK_FLAG.MARK:
      return '🚩';
    case -6:
      return gameState === GAME_FLAG.DEFEAT ? '💣' : null;
    case -7:
      return '💣';

    default:
      throw new Error(`정의되지 않은 block flag 입니다. : ${blockFlag}`);
  }
};

export const getColorByNumber = (number: string | null) => {
  switch (number) {
    case '1':
      return 'Blue';
    case '2':
      return 'Green';
    case '3':
      return 'Red';
    case '4':
      return 'Purple';
    case '5':
      return 'Maroon';
    case '6':
      return 'Turquoise';
    case '7':
      return 'Black';
    case '8':
      return 'Gray';
    default:
      return 'White';
  }
};
