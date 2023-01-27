import styled from 'styled-components';
import { selectBoard } from '../../redux/game/slice';
import { useAppSelector } from '../../redux/hooks';
import Block from '../Block';
import { IBoardView } from './type';

const Wrapper = styled.div<{ width: number }>`
  width: ${(props) => `${props.width}rem`};
`;

const BoardView = ({ width, height }: IBoardView) => {
  const board = useAppSelector(selectBoard);

  return (
    <Wrapper width={width}>
      {board.map((_, i) => {
        return <Block key={i} index={i} />;
      })}
    </Wrapper>
  );
};
export default BoardView;
