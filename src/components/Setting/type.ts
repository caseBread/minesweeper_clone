export interface ISettingView {
  face: string;
  mineNumber: number;
  timer: number;
  handleGameReset: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
