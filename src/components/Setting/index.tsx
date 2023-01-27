import React, { useCallback, useMemo } from 'react';
import useTimer from '../../hooks/useTimer';
import { resetBoard, selectGameState } from '../../redux/game/slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { getFaceByGameState } from './util';
import SettingView from './view';

const Setting = () => {
  const dispatch = useAppDispatch();
  const gameState = useAppSelector(selectGameState);
  const [timer] = useTimer(gameState);

  const handleGameReset = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      dispatch(resetBoard());
    },
    [dispatch]
  );

  const SettingViewProps = useMemo(() => {
    return {
      mineNumber: 10,
      face: getFaceByGameState(gameState),
      timer: timer,
      handleGameReset: handleGameReset,
    };
  }, [gameState, handleGameReset, timer]);

  return <SettingView {...SettingViewProps} />;
};

export default Setting;
