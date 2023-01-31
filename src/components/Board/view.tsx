import { selectBoard } from '../../redux/game/slice';
import { useAppSelector } from '../../redux/hooks';
import Block from '../Block';
import { Wrapper } from './style';
import { IBoardView } from './type';

const BoardView = ({ width, height }: IBoardView) => {
  const board = useAppSelector(selectBoard);

  return (
    <Wrapper width={width} height={height}>
      {board.map((_, i) => {
        return <Block key={i} index={i} />;
      })}
    </Wrapper>
  );
};
export default BoardView;
