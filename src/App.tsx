import React, { useReducer, useState } from 'react';
import { Game } from './components/Game/Game';
import GameProvider from './context/GameContext';

function App() {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
}

export default App;
