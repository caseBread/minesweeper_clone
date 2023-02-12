export interface IBlock {
  index: number;
}

export interface IBlockView {
  viewState: string | null;
  isRed: boolean;
  isOpened: boolean;
  handleLeftClickBlock: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleRightClickBlock: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
