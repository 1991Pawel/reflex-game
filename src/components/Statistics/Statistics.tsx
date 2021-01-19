import React from 'react';
import { useGameContext } from 'context/GameContext';

export const Statistics = () => {
  const { time, points } = useGameContext();
  return (
    <div>
      <span>Points: {points}</span>
      <span>Time: {time}s</span>
    </div>
  );
};
