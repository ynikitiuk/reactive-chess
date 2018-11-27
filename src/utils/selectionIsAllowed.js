export const selectionIsAllowed = (state, id) => {
  return (
    state.board[id].figure &&
    (state.board[id].figure.player === 'white') === state.whiteMove
  )
};
