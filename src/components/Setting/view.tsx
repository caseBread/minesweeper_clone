import { ISettingView } from './type';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
`;

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
