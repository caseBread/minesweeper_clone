import { useMemo } from 'react';
import { selectHeight, selectWidth } from '../../redux/game/slice';
import { useAppSelector } from '../../redux/hooks';
import BoardView from './view';

const Board = () => {
  const width = useAppSelector(selectWidth);
  const height = useAppSelector(selectHeight);
  const BoardViewProps = useMemo(() => {
    return {
      width: width,
      height: height,
    };
  }, [height, width]);

  return <BoardView {...BoardViewProps} />;
};

export default Board;
