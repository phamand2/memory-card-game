import React from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard';


function App() {
  return (
    <div className="App">
    <header className="App-header">
    Memory Game
    <p>Match Cards to win</p>
    </header>
    <div className='grid'>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>

    </div>

  </div>
);
}

export default App;
