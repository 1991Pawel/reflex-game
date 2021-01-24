import React from 'react';
import styles from '../SquareBoard/SquareBoard.module.scss';
import { Square } from '../Square/Square';
import { useGameContext } from '../../context/GameContext';

export const SquareBoard: React.FC = () => {
  const {
    squares,
    time,
    hitCorrectSquareHandler,
    randomNumber,
  } = useGameContext();
  return (
    <div className={styles.squareBoard}>
      {squares.map((square) => (
        <Square
          hitCorrectSquareHandler={hitCorrectSquareHandler}
          square={square}
          time={time}
          randomNumber={randomNumber}
        />
      ))}
    </div>
  );
};
