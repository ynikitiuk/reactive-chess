export const selectionIsAllowed = (state, id) => {
  return (
    (state.player === 'white' ? state.whiteMove : !state.whiteMove) &&
    state.board[id] &&
    (state.board[id].player === state.player)
  )
};
