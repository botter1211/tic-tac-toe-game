import React from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">
          <Square data={squares[0]} handleClick={() => handleClick(0)} />
          <Square data={squares[1]} handleClick={() => handleClick(1)} />
          <Square data={squares[2]} handleClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square data={squares[3]} handleClick={() => handleClick(3)} />
          <Square data={squares[4]} handleClick={() => handleClick(4)} />
          <Square data={squares[5]} handleClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square data={squares[6]} handleClick={() => handleClick(6)} />
          <Square data={squares[7]} handleClick={() => handleClick(7)} />
          <Square data={squares[8]} handleClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}
