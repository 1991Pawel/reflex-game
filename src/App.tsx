import React from 'react';
import { Game } from './components/Game/Game';
import GameProvider from './context/GameContext';

const App: React.FC = () => (
  <GameProvider>
    <Game />
  </GameProvider>
);

export default App;
