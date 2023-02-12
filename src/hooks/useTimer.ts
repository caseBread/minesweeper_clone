import { useEffect, useRef, useState } from 'react';
import { GAME_FLAG } from '@utils/constants';

type IuseTimer = (gameState: number) => [number, React.Dispatch<React.SetStateAction<number>>];

const useTimer: IuseTimer = (gameState) => {
  const [timer, setTimer] = useState(0);
  const runTimer = useRef<NodeJS.Timer>();

  useEffect(() => {
    switch (gameState) {
      case GAME_FLAG.RUNNING:
        runTimer.current = setInterval(() => {
          setTimer((prev) => prev + 1);
        }, 1000);
        break;
      case GAME_FLAG.DEFEAT:
      case GAME_FLAG.WIN:
        clearInterval(runTimer.current);
        break;
      case GAME_FLAG.READY:
        setTimer(0);
        break;
      default:
        throw new Error(`정의되지 않은 game state입니다. ${gameState}`);
    }

    return () => {
      clearInterval(runTimer.current);
    };
  }, [gameState]);

  return [timer, setTimer];
};

export default useTimer;
