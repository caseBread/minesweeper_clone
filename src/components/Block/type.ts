import React from 'react';

export interface IBlock {
  index: number;
}

export interface IBlockView {
  viewState: string | null;
  isRed: boolean;
  isOpened: boolean;
  handleBlockClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
