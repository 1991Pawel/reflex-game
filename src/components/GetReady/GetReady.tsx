import React from 'react';
import styles from '../GetReady/GetReady.module.scss';
import { useGameContext } from '../../context/GameContext';

export const GetReady: React.FC = () => {
  const { countDownMessage } = useGameContext();

  return <div className={styles.countDown}>{countDownMessage}</div>;
};
