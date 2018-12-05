export const selectEmptyRange = (indicesList, board, id) => {
  const start = indicesList.slice(0, indicesList.indexOf(id))
    .filter(index => index !== id)
    .map(index => board[index] ? 1 : 0)
    .lastIndexOf(1);
  const end = indicesList.slice(indicesList.indexOf(id) +1 )
    .map(index => board[index] ? 1 : 0)
    .indexOf(1);

  return indicesList.slice(
    start === -1 ? 0 : start,
    end === -1 ? indicesList.length + 1 : indicesList.indexOf(id) + end + 2
  )
};
