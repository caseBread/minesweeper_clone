import { ClosedButton, OpenedButton } from './style';
import { IBlockView } from './type';

const BlockView = ({ viewState, isRed, isOpened, handleBlockClick }: IBlockView) => {
  return (
    <>
      {isOpened ? (
        <OpenedButton type="button" isRed={isRed}>
          {viewState}
        </OpenedButton>
      ) : (
        <ClosedButton type="button" onClick={handleBlockClick}></ClosedButton>
      )}
    </>
  );
};

export default BlockView;
