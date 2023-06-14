import Board from './components/Board/Board';
import levels from './assets/levels.json';
import './App.css'

function App() {
  const levelIndex = 0;
  
  return (
    <>
      <main>
        <Board currentLevel={levels[levelIndex]} />
      </main>
    </>
  )
}

export default App
