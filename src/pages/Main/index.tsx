import Board from '../../components/Board';
import Edit from '../../components/Edit';
import Setting from '../../components/Setting';
import { Wrapper } from './style';

const Main = () => {
  return (
    <Wrapper>
      <Edit />
      <Setting />
      <Board />
    </Wrapper>
  );
};

export default Main;
