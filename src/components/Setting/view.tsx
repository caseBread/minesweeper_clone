import { ISettingView } from './type';
import { Wrapper } from './style';

const SettingView = ({ mineNumber, face, timer, handleGameReset }: ISettingView) => {
  return (
    <Wrapper>
      <span>{mineNumber}</span>
      <button type="button" onClick={handleGameReset}>
        {face}
      </button>
      <span>{timer}</span>
    </Wrapper>
  );
};
export default SettingView;
