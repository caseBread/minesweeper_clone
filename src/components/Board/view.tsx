import { selectBoard } from '../../redux/game/slice';
import { useAppSelector } from '../../redux/hooks';
import Block from '../Block';
import * as S from './style';
import { IBoardView } from './type';

const BoardView = ({ width, height }: IBoardView) => {
  const board = useAppSelector(selectBoard);

  return (
    <S.Wrapper width={width} height={height}>
      {board.map((_, i) => {
        return <Block key={i} index={i} />;
      })}
    </S.Wrapper>
  );
};
export default BoardView;
