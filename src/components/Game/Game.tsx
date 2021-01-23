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
    resetGame,
  } = useGameContext();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {!time && (
          <div className={styles.modal}>
            <h3>Game Over</h3>
            <p>your score : {points}</p>
          </div>
        )}
        <h1 className={styles.title}>Reflex Game</h1>
        <Statistics />

        <SquareBoard
          randomNumber={randomNumber}
          hitCorrectSquareHandler={hitCorrectSquareHandler}
          time={time}
        />

        {gameOn ? (
          <button className={styles.startBtn} onClick={resetGame}>
            reset
          </button>
        ) : (
          <button className={styles.startBtn} onClick={() => setGameOn(true)}>
            start
          </button>
        )}
      </div>
    </div>
  );
};
