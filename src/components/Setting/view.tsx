import { type ISettingView } from './type';
import * as S from './style';
import React from 'react';

const SettingView: React.FC<ISettingView> = ({ mineNumber, face, timer, handleGameReset }: ISettingView) => {
  return (
    <S.Wrapper>
      <span>{mineNumber}</span>
      <S.Face type="button" onClick={handleGameReset}>
        {face}
      </S.Face>
      <S.Timer>{timer}</S.Timer>
    </S.Wrapper>
  );
};
export default SettingView;
