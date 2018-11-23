import React from 'react';
import classes from './board.module.css';

import Pawn from '../pieces/pawn';
import King from '../pieces/king';
import Queen from '../pieces/queen';
import Knight from '../pieces/knight';
import Bishop from '../pieces/bishop';
import Rook from '../pieces/rook';
import Square from './square/square';

const board = () => {
  const initialSetup = {
    a1: new Rook('white'),
    b1: new Knight('white'),
    c1: new Bishop('white'),
    d1: new Queen('white'),
    e1: new King('white'),
    f1: new Bishop('white'),
    g1: new Knight('white'),
    h1: new Rook('white'),
    a2: new Pawn('white'),
    b2: new Pawn('white'),
    c2: new Pawn('white'),
    d2: new Pawn('white'),
    e2: new Pawn('white'),
    f2: new Pawn('white'),
    g2: new Pawn('white'),
    h2: new Pawn('white'),
    a7: new Pawn('black'),
    b7: new Pawn('black'),
    c7: new Pawn('black'),
    d7: new Pawn('black'),
    e7: new Pawn('black'),
    f7: new Pawn('black'),
    g7: new Pawn('black'),
    h7: new Pawn('black'),
    a8: new Rook('black'),
    b8: new Knight('black'),
    c8: new Bishop('black'),
    d8: new Queen('black'),
    e8: new King('black'),
    f8: new Bishop('black'),
    g8: new Knight('black'),
    h8: new Rook('black')
  };

  // const initialState = Array(64).fill(null)
  //   .reduce((state, el, index) => {
  //     const i = Math.ceil((index+1)/8);
  //     const j = index%8 + 1;
  //     const key = `${String.fromCharCode(96+i)}${j}`;
  //     return {
  //       ...state,
  //       [key]: {
  //         color: (i + j) % 2 === 0 ? 'dark' : 'light',
  //         player: j === 1 || j === 2 ? 'white' : j === 7 || j === 8 ? 'black' : null,
  //         figure: initialSetup.hasOwnProperty(key) ? initialSetup[key] : null
  //       }
  //     };
  //   }, {});

  const initialState = {};

  for (let j = 8; j >= 1; j--) {
    for (let i = 1; i <= 8; i++) {
      const key = `${String.fromCharCode(96+i)}${j}`;
      initialState[key] = {
        color: (i + j) % 2 === 0 ? 'dark' : 'light',
        player: j === 1 || j === 2 ? 'white' : j === 7 || j === 8 ? 'black' : null,
        figure: initialSetup.hasOwnProperty(key) ? initialSetup[key] : null
      }
    }
  }

  console.log(initialState);

  const squares = [];
  for (let key in initialState) {
    squares.push({
      id: key,
      figure: initialState[key].figure,
      color: initialState[key].color
    })
  }

  return (
    <div className={classes['board-container']}>
      {squares.map(square => <Square key={square.id} id={square.id} figure={square.figure} color={square.color}/>)}
    </div>
  )
};

export default board;
