import { useMemo } from 'react';
import { createArray } from '../../utils/array';
import { getBoardSize } from '../../utils/boardSize';
import Block from '../Block';
import { IBoardView } from './type';

const BoardView = ({ width, height }: IBoardView) => {
  const boardArray = useMemo(() => createArray(width, height, null), [height, width]);
  const boardSize = useMemo(() => getBoardSize(width, 4), [width]);
  return (
    <div className={`${boardSize} m-4`}>
      {boardArray.map((_, i) => {
        const [x, y] = [i % width, Math.floor(i / width)];
        return <Block key={x * y + x} x={x} y={y} />;
      })}
    </div>
  );
};
export default BoardView;
