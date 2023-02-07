import { ISettingView } from './type';
import * as S from './style';

const SettingView = ({ mineNumber, face, timer, handleGameReset }: ISettingView) => {
  return (
    <S.Wrapper>
      <span>{mineNumber}</span>
      <S.Face type="button" onClick={handleGameReset}>
        {face}
      </S.Face>
      <span>{timer}</span>
    </S.Wrapper>
  );
};
export default SettingView;
