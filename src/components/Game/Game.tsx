import React from 'react';
import { SquareBoard } from 'components/SquareBoard/SquareBoard';
import { Modal } from '../Modal/Modal';
import styles from '../Game/Game.module.scss';
import { Statistics } from '../Statistics/Statistics';
import { useGameContext } from 'context/GameContext';

export const Game: React.FC = () => {
  const { gameOn, setGameOn, points, time, resetGame } = useGameContext();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Modal time={time} points={points} />
        <h1 className={styles.title}>Reflex Game</h1>
        <Statistics />
        <SquareBoard />
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
