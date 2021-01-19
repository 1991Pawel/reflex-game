import { SquareBoard } from 'components/SquareBoard/SquareBoard';
import React from 'react';
import styles from '../Game/Game.module.scss';
import { Statistics } from '../Statistics/Statistics';
import { useGameContext } from 'context/GameContext';

export const Game = () => {
  const {
    gameOn,
    setGameOn,
    points,
    squares,
    time,
    randomNumber,
    hitCorrectSquareHandler,
  } = useGameContext();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Reflex Game</h1>
      <Statistics />
      <SquareBoard
        randomNumber={randomNumber}
        hitCorrectSquareHandler={hitCorrectSquareHandler}
      />
      <button onClick={() => setGameOn((prev) => !prev)}>
        {gameOn ? 'Reset' : 'Start Game'}
      </button>
    </div>
  );
};