import { Coords } from "./types";
import { useEffect, useState } from "react";
import levels from "./assets/levels.json";
import toggleState from "./helpers/toggleState/toggleState";

import Board from "./components/Board/Board";
import ColumnCluesContainer from "./components/ColumnCluesContainer/ColumnCluesContainer";
import RowCluesContainer from "./components/RowCluesContainer/RowCluesContainer";

import "./App.css";

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
    const { x, y } = coords;
    const tempUserMatrix = userMatrix.map((row) => [...row]);
    const cellState = tempUserMatrix[y][x];

    tempUserMatrix[y][x] = toggleState(cellState);

    setUserMatrix(tempUserMatrix);
  }

  return (
    <main>
      <div className="column_clues_container_positioner">
        <ColumnCluesContainer matrix={matrix} />
      </div>
      <div className="row_clues_container_positioner">
        <RowCluesContainer matrix={matrix} />
      </div>
      <div className="board_wrapper">
        <Board userMatrix={userMatrix} onCellClick={onCellClick} />
      </div>
    </main>
  );
}

export default App;
