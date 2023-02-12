import React, { useCallback, useMemo } from 'react';
import useInput from '@hooks/useInput';
import { configuration } from '@redux/game/slice';
import { useAppDispatch } from '@redux/hooks';
import { type IConfiguration } from './type';
import ConfigurationView from './view';

const Configuration: React.FC<IConfiguration> = ({ close }: IConfiguration) => {
  const dispatch = useAppDispatch();
  const [width, changeWidth] = useInput();
  const [height, changeHeight] = useInput();
  const [mineCount, changeMineCount] = useInput();

  const handleConfigurationFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(configuration({ width, height, mineCount }));
      close();
    },
    [close, dispatch, height, mineCount, width]
  );

  const canSubmitInputs = useMemo(() => {
    return (mineCount === '' && width === '' && height === '') || Number(mineCount) < Number(width) * Number(height);
  }, [height, mineCount, width]);

  const ConfigurationViewProps = useMemo(() => {
    return {
      handleSubmit: handleConfigurationFormSubmit,
      close,
      changeWidth,
      changeHeight,
      changeMineCount,
      canSubmitInputs,
    };
  }, [changeHeight, changeMineCount, changeWidth, close, handleConfigurationFormSubmit, canSubmitInputs]);

  return <ConfigurationView {...ConfigurationViewProps} />;
};
export default Configuration;
