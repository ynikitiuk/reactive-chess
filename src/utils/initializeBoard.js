import Bishop from "../components/pieces/bishop";
import King from "../components/pieces/king";
import Knight from "../components/pieces/knight";
import Pawn from "../components/pieces/pawn";
import Queen from "../components/pieces/queen";
import Rook from "../components/pieces/rook";

import { mapIndexToCoords, mapIndexToKey } from './utils';

export const initializeBoard = () => {
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

  return Array(64).fill(null)
    .map((el, index) => {
      const [i, j] = mapIndexToCoords(index);
      const key = mapIndexToKey(index);
      return {
        color: (i + j) % 2 === 0 ? 'light' : 'dark',
        figure: initialSetup.hasOwnProperty(key) ? initialSetup[key] : null
      };
    });
};
