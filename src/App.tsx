import { useEffect } from "react";
import levels from "./assets/levels.json";

import Board from './components/Board/Board';
import levels from './assets/levels.json';
import './App.css'

function App() {
  const levelIndex = 0;
  const matrix = levels[levelIndex];

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--grid-resolution", `${matrix.length}`);
  }, [matrix]);

  return (
    <>
      <main>
        <div className="board_wrapper">
          <Board matrix={matrix} />
        </div>
      </main>
    </>
  )
}

export default App
