import { possibleMoves } from './possibleMoves';

export const isChecked = (board, king) => {
  return board.map((square, index) => ({...square, index: index}))
  .filter(square => 
    square.figure && square.figure.player === (king.figure.player === 'white' ? 'black' : 'white'))
    .reduce((total, square) => {
      return [...total, ...possibleMoves(board, square.index)]
    }, [])
    .includes(king.index)
}
