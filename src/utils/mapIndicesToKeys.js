export const mapIndicesToKeys = (indices) => {
  return indices.map(mapIndicesToKey);
};

export const mapIndicesToKey = ([i ,j]) => {
  return `${String.fromCharCode(97 + j)}${8 - i}`;
};

export const mapKeyToIndices = (key) => {
  const i = 8 - key[1] ;
  const j = key[0].charCodeAt(0) - 97;
  return [i, j];
};

export const cropSequence = (sequence, board, id) => {
  const keys = mapIndicesToKeys(sequence);
  const start = keys.slice(0, keys.indexOf(id)).filter(key => key !== id).map(el => board[el].figure ? 1 : 0).lastIndexOf(1);
  const end = keys.slice(keys.indexOf(id)+1).map(el => board[el].figure ? 1 : 0).indexOf(1);
  return sequence.slice(start === -1 ? 0 : start, end === -1 ? sequence.length + 1 : keys.indexOf(id)+end+2)
};
