import React from 'react';

import Pawn from '../components/pieces/pawn';
import King from '../components/pieces/king';
import Queen from '../components/pieces/queen';
import Knight from '../components/pieces/knight';
import Bishop from '../components/pieces/bishop';
import Rook from '../components/pieces/rook';
import Square from '../components/board/square/square';

const initialState = [
  [new Rook('black'), new Knight('black'), new Bishop('black'), new Queen('black'),
    new King('black'), new Bishop('black'), new Knight('black'), new Rook('black')],
  Array(8).fill(new Pawn('black')),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(new Pawn('white')),
  [new Rook('white'), new Knight('white'), new Bishop('white'), new Queen('white'),
    new King('white'), new Bishop('white'), new Knight('white'), new Rook('white')]
];

export const initializeBoard = () => {
  return initialState
    .map(row => <div>{row.map(square => <Square figure={square}/>)}</div>);
};
