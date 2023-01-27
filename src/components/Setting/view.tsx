import { ISettingView } from './type';
import { Wrapper } from './style';

const SettingView = ({ mineNumber, face, timer }: ISettingView) => {
  return (
    <Wrapper>
      <span>{mineNumber}</span>
      <span>{face}</span>
      <span>{timer}</span>
    </Wrapper>
  );
};
export default SettingView;
