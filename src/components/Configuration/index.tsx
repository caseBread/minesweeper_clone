import React, { useCallback, useMemo, useState } from 'react';
import { configuration } from '../../redux/game/slice';
import { useAppDispatch } from '../../redux/hooks';
import { IConfiguration } from './type';
import ConfigurationView from './view';

const Configuration = ({ close }: IConfiguration) => {
  const dispatch = useAppDispatch();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [mineCount, setMineCount] = useState(0);

  const handleChangeWidth = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(Number(e.currentTarget.value));
  }, []);

  const handleChangeHeight = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(e.currentTarget.value));
  }, []);

  const handleChangeMineCount = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setMineCount(Number(e.currentTarget.value));
  }, []);

  const handleConfigurationFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(configuration({ width, height, mineCount }));
      close();
    },
    [close, dispatch, height, mineCount, width]
  );

  const ConfigurationViewProps = useMemo(() => {
    return {
      handleSubmit: handleConfigurationFormSubmit,
      close,
      handleChangeWidth,
      handleChangeHeight,
      handleChangeMineCount,
    };
  }, [close, handleChangeHeight, handleChangeMineCount, handleChangeWidth, handleConfigurationFormSubmit]);

  return <ConfigurationView {...ConfigurationViewProps} />;
};
export default Configuration;
