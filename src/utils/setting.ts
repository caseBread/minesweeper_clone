import { GAME_FLAG } from './constants';

export const getFaceByGameState = (gameState: number) => {
  switch (gameState) {
    case GAME_FLAG.DEFEAT:
      return '😭';
    case GAME_FLAG.READY:
    case GAME_FLAG.RUNNING:
      return '😀';
    case GAME_FLAG.WIN:
      return '😎';
    default:
      throw new Error(`정의되지 않은 유형의 game state입니다. ${gameState}`);
  }
};
