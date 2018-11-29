export const mapCoordsToKey = ([i ,j]) => {
  return `${String.fromCharCode(97 + j)}${8 - i}`;
};

export const mapIndexToKey = (index) => {
  return mapCoordsToKey(mapIndexToCoords(index));
};

export const mapCoordsListToIndices = (coords) => {
  return coords.map(mapCoordsToIndex);
};

export const mapCoordsToIndex = ([i ,j]) => {
  return i * 8 + j;
};

export const mapIndexToCoords = (index) => {
  const i = Math.floor(index / 8);
  const j = index % 8;

  return [i, j];
};
