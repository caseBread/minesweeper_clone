import { useMemo } from 'react';
import { IBlock } from './type';
import BlockView from './view';

const Block = ({ x, y }: IBlock) => {
  const PBlockView = useMemo(() => {
    return {
      blockState: 'bomb',
    };
  }, []);

  return <BlockView {...PBlockView} />;
};

export default Block;
