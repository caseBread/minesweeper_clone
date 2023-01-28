export const createArray = (width: number, height: number, value: any) => {
  return Array(width * height).fill(value);
};

export const getY = (width: number, index: number) => {
  return Math.floor(index / width);
};

export const getX = (width: number, index: number) => {
  return index % width;
};

export const getIndex = (width: number, x: number, y: number) => {
  return y * width + x;
};
