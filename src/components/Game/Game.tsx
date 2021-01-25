import React from 'react';
import { SquareBoard } from 'components/SquareBoard/SquareBoard';
import { Modal } from '../Modal/Modal';
import { GetReady } from '../GetReady/GetReady';
import styles from '../Game/Game.module.scss';
import { Statistics } from '../Statistics/Statistics';
import { useGameContext } from 'context/GameContext';

export const Game: React.FC = () => {
  const {
    startGame,
    points,
    time,
    resetGame,
    getReady,
    gameOn,
  } = useGameContext();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Modal time={time} points={points} />
        <h1 className={styles.title}>Reflex Game</h1>
        <Statistics />
        <SquareBoard />
        {getReady && <GetReady />}
        {gameOn ? (
          <button className={styles.btn} onClick={resetGame}>
            reset
          </button>
        ) : (
          <button className={styles.btn} onClick={startGame}>
            start
          </button>
        )}
      </div>
    </div>
  );
};
