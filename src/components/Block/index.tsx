import React, { useCallback, useMemo } from 'react';
import { activeBlock, selectGameState } from '../../redux/game/slice';
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

  const handleBlockClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      dispatch(activeBlock({ index }));
    },
    [dispatch, index]
  );

  const BlockViewProps = useMemo(() => {
    return {
      viewState: getBlockState(blockFlag, gameState),
      isRed: blockFlag === BLOCK_FLAG.DISCOVERED_MINE,
      isOpened:
        (gameState === GAME_FLAG.DEFEAT && blockFlag === BLOCK_FLAG.MINE) ||
        blockFlag === BLOCK_FLAG.OPENED ||
        blockFlag === BLOCK_FLAG.DISCOVERED_MINE,
      handleBlockClick: handleBlockClick,
    };
  }, [blockFlag, gameState, handleBlockClick]);

  return <BlockView {...BlockViewProps} />;
};

export default Block;
