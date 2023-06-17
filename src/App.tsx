import "./App.css";

import { useEffect, useState } from "react";

import levels from "./assets/levels.json";

import {
  Board,
  ColumnCluesContainer,
  Header,
  RowCluesContainer,
  Portal,
  TimeDisplay,
} from "./components";

import {
  calculateCompleteness,
  initialUserMatrix,
  toggleState,
  setCSSGridResolution,
  getTargetMoves,
} from "./helpers";

import { Coords } from "./types";

function App() {
  const [levelMoves, setLevelMoves] = useState(0);
  const [totalMoves, setTotalMoves] = useState(0);
  const [level, setLevel] = useState(0);
  const [startTimeMs, setStartTimeMs] = useState<number>(0);
  const [elapsedTimeMs, setElapsedTimeMs] = useState<number>();
  const levelMatrix = levels[level];
  const gridResolution = levelMatrix.length;
  const [userMatrix, setUserMatrix] = useState(
    initialUserMatrix(gridResolution)
  );
  const isLevelComplete =
    JSON.stringify(userMatrix) === JSON.stringify(levelMatrix);

  setCSSGridResolution(gridResolution);

  useEffect(() => {
    setCSSGridResolution(gridResolution);
    setUserMatrix(initialUserMatrix(gridResolution));
    setStartTimeMs(Date.now());
  }, [gridResolution]);

  useEffect(() => {
    const finishTime = Date.now();
    setElapsedTimeMs(finishTime - startTimeMs);
  }, [isLevelComplete, startTimeMs]);

  function onCellClick(coords: Coords): void {
    const { x, y } = coords;
    const tempUserMatrix = userMatrix.map((row) => [...row]);
    const cellState = tempUserMatrix[y][x];

    tempUserMatrix[y][x] = toggleState(cellState);

    setUserMatrix(tempUserMatrix);
    setLevelMoves(levelMoves + 1);
  }

  return (
    <>
      {isLevelComplete && (
        <Portal>
          <p>Target Moves: {getTargetMoves(levelMatrix)}</p>
          <p>Your Moves: {levelMoves}</p>
          <p>
            Time:
            <TimeDisplay durationMs={elapsedTimeMs} />
          </p>
        </Portal>
      )}
      <Header
        level={level}
        moves={levelMoves}
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
