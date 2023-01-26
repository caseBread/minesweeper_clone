export const createArray = (width: number, height: number, value: any) => {
  return Array(width * height).fill(value);
};
