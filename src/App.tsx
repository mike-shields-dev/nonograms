import "./App.css";

import { useEffect, useState } from "react";

import levels from "./assets/levels.json";
import {
  Board,
  ColumnCluesContainer,
  Header,
  Portal,
  RowCluesContainer,
  TimeDisplay,
} from "./components";
import {
  calculateCompleteness,
  getTargetMoves,
  freshUserMatrix,
  setCSSGridResolution,
  toggleState,
} from "./helpers";
import { Coords } from "./types";

function App() {
  const [levelMoves, setLevelMoves] = useState(0);
  const [totalMoves, setTotalMoves] = useState(0);
  const [level, setLevel] = useState(0);
  const [startTimeMs, setStartTimeMs] = useState<number>(0);
  const [elapsedTimeMs, setElapsedTimeMs] = useState<number>();
  const levelMatrix = levels[level].map((row) => row.map(Boolean));
  const gridResolution = levelMatrix.length;
  const [userMatrix, setUserMatrix] = useState(freshUserMatrix(gridResolution));
  const isLevelComplete =
    JSON.stringify(userMatrix) === JSON.stringify(levelMatrix);

  setCSSGridResolution(gridResolution);

  useEffect(() => {
    setCSSGridResolution(gridResolution);
    setUserMatrix(freshUserMatrix(gridResolution));
    setStartTimeMs(Date.now());
  }, [gridResolution]);

  useEffect(() => {
    setElapsedTimeMs(Date.now() - startTimeMs);
  }, [isLevelComplete, startTimeMs]);

  function onCellClick(coords: Coords): void {
    const { x, y } = coords;
    const tempUserMatrix = userMatrix.map((row) => [...row]);
    const cellState = tempUserMatrix[y][x];

    tempUserMatrix[y][x] = toggleState(cellState);

    setUserMatrix(tempUserMatrix);
    setLevelMoves(levelMoves + 1);
  }

  function onNextLevelBtnClick() {
    setLevel(level + 1);
    setTotalMoves(totalMoves + levelMoves);
    setLevelMoves(0);
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
          <button onClick={onNextLevelBtnClick}>Next Level</button>
        </Portal>
      )}
      <Header
        level={level}
        moves={levelMoves}
        completed={calculateCompleteness(levelMatrix, userMatrix)}
      />
      <main>
        <div className="column_clues_container_gridarea">
          <ColumnCluesContainer levelMatrix={levelMatrix} />
        </div>
        <div className="row_clues_container_gridarea">
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
