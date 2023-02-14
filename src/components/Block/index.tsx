import React, { useCallback, useMemo } from 'react';
import { activeBlock, controlMark, selectGameState } from '@redux/game/slice';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { type RootState } from '@redux/store';
import { getBlockState } from '@utils/block';
import { BLOCK_FLAG, GAME_FLAG } from '@utils/constants';
import { type IBlock } from './type';
import BlockView from './view';

const Block: React.FC<IBlock> = ({ index }: IBlock) => {
  const dispatch = useAppDispatch();
  const blockFlag = useAppSelector((state: RootState) => state.game.board[index]);
  const gameState = useAppSelector(selectGameState);

  const handleLeftClickBlock = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (gameState === GAME_FLAG.READY || gameState === GAME_FLAG.RUNNING) {
        dispatch(activeBlock({ index }));
      }
    },
    [dispatch, gameState, index]
  );

  const handleRightClickBlock = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      dispatch(controlMark({ index }));
    },
    [dispatch, index]
  );

  const BlockViewProps = useMemo(() => {
    return {
      viewState: getBlockState(blockFlag, gameState),
      isRed: blockFlag === BLOCK_FLAG.DISCOVERED_MINE,
      isOpened:
        (gameState === GAME_FLAG.DEFEAT && blockFlag === BLOCK_FLAG.MINE) ||
        blockFlag >= 0 ||
        blockFlag === BLOCK_FLAG.DISCOVERED_MINE,
      handleLeftClickBlock,
      handleRightClickBlock,
    };
  }, [blockFlag, gameState, handleLeftClickBlock, handleRightClickBlock]);

  return <BlockView {...BlockViewProps} />;
};

// BlockView의 props가 같으면 rerendering을 해주지 않는다.
export default React.memo(Block);
