import React, { useState } from "react";
import type { SquareValue } from "./Square";
import { Square } from "./Square";
import { calculateMode, calculateWinner } from "../tictactoe";

import type { Grid } from "../tictactoe";

type SquareIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export function Board() {
  const initialState: Grid = Array<SquareValue>(9).fill(null);
  const [squares, setSquares] = useState<Grid>(initialState);
  const [status, setStatus] = useState("Next player: X");
  let winner = null;

  function handleClick(squareIndex: SquareIndex) {
    if (squares[squareIndex] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[squareIndex] = calculateMode(nextSquares);
    setSquares(nextSquares);

    winner = calculateWinner(nextSquares);
    if (winner) {
      setStatus("Winner: " + winner);
    } else {
      setStatus("Next player: " + calculateMode(nextSquares));
    }
  }

  function reset() {
    setSquares(initialState);
    setStatus("Next player: X");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <button onClick={() => reset()}>Reset</button>
    </>
  );
}
