import "./App.css";

import { useEffect, useState } from "react";

import levels from "./assets/levels.json";
import Board from "./components/Board/Board";
import ColumnHints from "./components/ColumnHints/ColumnHints";
import RowHints from "./components/RowHints/RowHints";
import toggleState from "./helpers/toggleState/toggleState";
import { Coords } from "./types";

function App() {
  const levelIndex = 1;
  const matrix = levels[levelIndex];
  const gridResolution = matrix.length;
  const [userMatrix, setUserMatrix] = useState(
    Array(gridResolution).fill(Array(gridResolution).fill(null))
  );

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--grid-resolution", `${gridResolution}`);
    setUserMatrix(Array(gridResolution).fill(Array(gridResolution).fill(null)));
  }, [gridResolution]);

  function onCellClick(coords: Coords): void {
    const [x, y] = coords;
    const tempUserMatrix = userMatrix.map((row) => [...row]);
    const cellState = tempUserMatrix[y][x];

    tempUserMatrix[y][x] = toggleState(cellState);

    setUserMatrix(tempUserMatrix);
  }

  return (
    <main>
      <div className="column_hints_wrapper">
        <ColumnHints matrix={matrix} />
      </div>
      <div className="row_hints_wrapper">
        <RowHints matrix={matrix} />
      </div>
      <div className="board_wrapper">
        {userMatrix && (
          <Board userMatrix={userMatrix} onCellClick={onCellClick} />
        )}
      </div>
    </main>
  );
}

export default App;
