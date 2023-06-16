import { Coords } from "./types";
import { useEffect, useState } from "react";
import levels from "./assets/levels.json";
import toggleState from "./helpers/toggleState/toggleState";

import Header from "./components/Header/Header";
import Board from "./components/Board/Board";
import ColumnCluesContainer from "./components/ColumnCluesContainer/ColumnCluesContainer";
import RowCluesContainer from "./components/RowCluesContainer/RowCluesContainer";

import "./App.css";
import calculateCompleteness from "./helpers/calculateCompleteness/calculateCompleteness";

function App() {
  const [moves, setMoves] = useState(0);
  const [level, setLevel] = useState(0);

  const matrix = levels[level];
  const gridResolution = matrix.length;

  const [userMatrix, setUserMatrix] = useState(
    Array(gridResolution).fill(Array(gridResolution).fill(null))
  );

  const completeness = calculateCompleteness(matrix, userMatrix);

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
    setMoves(moves + 1);
  }

  if (JSON.stringify(userMatrix) === JSON.stringify(matrix)) {
    setLevel(level + 1);
    setMoves(0);
  }

  return (
    <>
      <Header level={level} moves={moves} completeness={completeness} />
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
    </>
  );
}

export default App;
