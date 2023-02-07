import * as S from './style';
import { IBlockView } from './type';

const BlockView = ({ viewState, isRed, isOpened, handleLeftClickBlock, handleRightClickBlock }: IBlockView) => {
  return (
    <>
      {isOpened ? (
        <S.OpenedButton type="button" isRed={isRed}>
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
