import React, { useCallback, useMemo } from 'react';
import { activeBlock, controlMark, selectGameState } from '../../redux/game/slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { getBlockState } from '../../utils/block';
import { BLOCK_FLAG, GAME_FLAG } from '../../utils/constants';
import { IBlock } from './type';
import BlockView from './view';

const Block = ({ index }: IBlock) => {
  const dispatch = useAppDispatch();
  // TODO : select함수 활용하기
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

export default Block;
