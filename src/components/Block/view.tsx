import { ClosedButton, OpenedButton } from './style';
import { IBlockView } from './type';

const BlockView = ({ viewState, isRed, isOpened, handleLeftClickBlock, handleRightClickBlock }: IBlockView) => {
  return (
    <>
      {isOpened ? (
        <OpenedButton type="button" isRed={isRed}>
          {viewState}
        </OpenedButton>
      ) : (
        <ClosedButton type="button" onClick={handleLeftClickBlock} onContextMenu={handleRightClickBlock}>
          {viewState}
        </ClosedButton>
      )}
    </>
  );
};

export default BlockView;
