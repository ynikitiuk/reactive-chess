import { allowedMoves } from './allowedMoves'

export const moveIsAllowed = (state, from, to) => {
  return (
    from !== to &&
    (state.board[to].figure ? state.board[from].figure.player !== state.board[to].figure.player : true) &&
    allowedMoves(from).includes(to)
  )
};
