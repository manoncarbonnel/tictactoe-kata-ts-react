import type { SquareValue } from "./components/Square";

export type Mode = "X" | "O";
export type Grid = readonly SquareValue[];

function isOfMode(mode: Mode) {
  return (square: SquareValue) => square === mode;
}

export function calculateMode(squares: Grid) {
  const x = squares.filter(isOfMode("X")).length;
  const o = squares.filter(isOfMode("O")).length;
  return o < x ? "O" : "X";
}

export function calculateWinner(squares: Grid): Mode | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
