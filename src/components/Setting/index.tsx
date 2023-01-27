import React, { useCallback, useMemo } from 'react';
import { resetBoard } from '../../redux/game/slice';
import { useAppDispatch } from '../../redux/hooks';
import SettingView from './view';

const Setting = () => {
  const dispatch = useAppDispatch();

  const handleGameReset = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      dispatch(resetBoard());
    },
    [dispatch]
  );

  const SettingViewProps = useMemo(() => {
    return {
      mineNumber: 10,
      face: '😀',
      timer: 90,
      handleGameReset: handleGameReset,
    };
  }, [handleGameReset]);

  return <SettingView {...SettingViewProps} />;
};

export default Setting;
