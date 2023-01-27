import { ISettingView } from './type';
import { Face, Wrapper } from './style';

const SettingView = ({ mineNumber, face, timer, handleGameReset }: ISettingView) => {
  return (
    <Wrapper>
      <span>{mineNumber}</span>
      <Face type="button" onClick={handleGameReset}>
        {face}
      </Face>
      <span>{timer}</span>
    </Wrapper>
  );
};
export default SettingView;
