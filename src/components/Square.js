import React from "react";

function Square({ data, handleClick }) {
  return (
    <button className={"square"} onClick={handleClick}>
      {data}
    </button>
  );
}

export default Square;
