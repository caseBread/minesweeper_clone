export const getBlockState = (blockFlag: number): string | null => {
  switch (blockFlag) {
    case 8:
    case 7:
    case 6:
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
      return String(blockFlag);
    case 0:
    case -1:
    case -2:
    case -3:
    case -4:
    case -5:
    case -6:
      return null;
    case -7:
      return '💣';

    default:
      throw new Error(`정의되지 않은 block flag 입니다. : ${blockFlag}`);
  }
};
