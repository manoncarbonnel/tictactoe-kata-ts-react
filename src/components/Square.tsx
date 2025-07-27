import React from "react";

type Props = {
  value?: SquareValue;
  onSquareClick: () => void;
};

export type SquareValue = "X" | "O" | null;

export function Square({ value, onSquareClick }: Props) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
