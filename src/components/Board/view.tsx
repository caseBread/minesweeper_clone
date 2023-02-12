import React from 'react';
import { selectBoard } from '@redux/game/slice';
import { useAppSelector } from '@redux/hooks';
import Block from '@components/Block';
import * as S from './style';
import { type IBoardView } from './type';

const BoardView: React.FC<IBoardView> = ({ width, height }: IBoardView) => {
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
