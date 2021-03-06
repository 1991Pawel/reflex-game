import React from 'react';
import styles from '../Statistics/Statistic.module.scss';
import { useGameContext } from 'context/GameContext';

export const Statistics: React.FC = () => {
  const { time, points } = useGameContext();
  return (
    <div className={styles.stats}>
      <span className={styles.points}>Points: {points}</span>
      <span className={styles.time}>Time: {time}</span>
    </div>
  );
};
