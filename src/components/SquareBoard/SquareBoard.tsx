import React from 'react';
// import { Square } from '../Square/Square';
import styles from '../SquareBoard/SquareBoard.module.scss';
import ground from '../../assets/donut.png';
import mole from '../../assets/4.webp';

export const SquareBoard = ({
  randomNumber,
  hitCorrectSquareHandler,
  time,
}: any) => {
  const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className={styles.squareBoard}>
      {squares.map((square) => (
        <button
          onClick={() => hitCorrectSquareHandler(square)}
          className={`${
            square === randomNumber ? styles.squareActive : styles.square
          }`}
          key={square}
          disabled={time == 0}
        >
          <span className={styles.mole}>
            <img src={mole} />
          </span>
          <span className={styles.donut}>
            <img src={ground} />
          </span>
        </button>
      ))}
    </div>
  );
};
