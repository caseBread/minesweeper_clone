import React from 'react';
import * as S from './style';
import { type IBlockView } from './type';

const BlockView: React.FC<IBlockView> = ({
  viewState,
  isRed,
  isOpened,
  handleLeftClickBlock,
  handleRightClickBlock,
}: IBlockView) => {
  return (
    <>
      {isOpened ? (
        <S.OpenedButton type="button" isRed={isRed} number={viewState}>
          {viewState}
        </S.OpenedButton>
      ) : (
        <S.ClosedButton type="button" onClick={handleLeftClickBlock} onContextMenu={handleRightClickBlock}>
          {viewState}
        </S.ClosedButton>
      )}
    </>
  );
};

export default BlockView;
