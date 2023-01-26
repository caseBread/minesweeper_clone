import styled from 'styled-components';
import Board from './components/Board';
import Edit from './components/Edit';
import Setting from './components/Setting';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: gray;
  padding: 0.25rem 1rem 1rem 1rem;
  border-radius: 0.5rem;
`;

const App = () => {
  return (
    <Wrapper>
      <Edit />
      <Setting />
      <Board />
    </Wrapper>
  );
};

export default App;
