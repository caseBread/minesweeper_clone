import { GAME_FLAG } from './constants';

export const getFaceByGameState = (gameState: number) => {
  switch (gameState) {
    case GAME_FLAG.DEFEAT:
      return 'π­';
    case GAME_FLAG.READY:
    case GAME_FLAG.RUNNING:
      return 'π';
    case GAME_FLAG.WIN:
      return 'π';
    default:
      throw new Error(`μ μλμ§ μμ μ νμ game stateμλλ€. ${gameState}`);
  }
};
