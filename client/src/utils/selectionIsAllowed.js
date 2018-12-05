export const selectionIsAllowed = (state, id) => {
  return (
    state.board[id] &&
    (state.board[id].player === 'white') === state.whiteMove
  )
};
