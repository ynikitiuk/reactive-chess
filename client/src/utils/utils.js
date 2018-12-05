export const mapIndexToKey = (index) => {
  const [i, j] = mapIndexToCoords(index);
  return `${String.fromCharCode(97 + j)}${8 - i}`;
};

export const mapCoordsToIndex = ([i ,j]) => {
  return i * 8 + j;
};

export const mapIndexToCoords = (index) => {
  return [Math.floor(index / 8), index % 8];
};
