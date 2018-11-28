export const mapIndicesToKeys = (indices) => {
  return indices.map(
    ([i ,j]) => `${String.fromCharCode(97 + j)}${8 - i}`
  )
};

export const mapKeyToIndices = (key) => {
  const i = 8 - key[1] ;
  const j = key[0].charCodeAt(0) - 97;
  return [i, j];
};
