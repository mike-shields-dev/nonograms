import "./App.css";

import { useEffect, useState } from "react";

import levels from "./assets/levels.json";
import {
  Board,
  ColumnCluesContainer,
  Header,
  RowCluesContainer,
} from "./components";

import {
  calculateCompleteness,
  initialUserMatrix,
  toggleState,
} from "./helpers";

import { Coords } from "./types";

function App() {
  const [moves, setMoves] = useState(0);
  const [level, setLevel] = useState(0);

  const levelMatrix = levels[level];
  const gridResolution = levelMatrix.length;

  const [userMatrix, setUserMatrix] = useState(
    initialUserMatrix(gridResolution)
  );

  calculateCompleteness(levelMatrix, userMatrix);

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

  if (JSON.stringify(userMatrix) === JSON.stringify(levelMatrix)) {
    setLevel(level + 1);
    setMoves(0);
  }

  return (
    <>
      <Header
        level={level}
        moves={moves}
        completeness={calculateCompleteness(levelMatrix, userMatrix)}
      />
      <main>
        <div className="column_clues_container_positioner">
          <ColumnCluesContainer levelMatrix={levelMatrix} />
        </div>
        <div className="row_clues_container_positioner">
          <RowCluesContainer levelMatrix={levelMatrix} />
        </div>
        <div className="board_wrapper">
          <Board userMatrix={userMatrix} onCellClick={onCellClick} />
        </div>
      </main>
    </>
  );
}

export default App;
