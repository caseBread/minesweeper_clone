import styled from 'styled-components';
import { IBlockView } from './type';

const Button = styled.button`
  width: 1rem;
  height: 1rem;
  margin: 0;
  padding: 0;
`;

const ClosedButton = styled(Button)`
  background-color: rgb(209, 213, 219);
  border-color: rgb(156, 163, 175);
  border-width: 2px;
`;
const OpenedButton = styled(Button)`
  text-align: center;
`;

const BlockView = ({ viewState, isOpened, handleBlockClick }: IBlockView) => {
  return (
    <>
      {isOpened ? (
        <OpenedButton type="button">{viewState}</OpenedButton>
      ) : (
        <ClosedButton type="button" onClick={handleBlockClick}></ClosedButton>
      )}
    </>
  );
};

export default BlockView;
