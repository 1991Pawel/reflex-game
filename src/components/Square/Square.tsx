import React from 'react';
import styles from '../Square/Square.module.scss';
import homer from '../../assets/homer.webp';
import donut from '../../assets/donut.png';

type SquareProps = {
  square: number;
  time: number;
  randomNumber: number | null;
  hitCorrectSquareHandler: (square: number) => void;
};
export const Square: React.FC<SquareProps> = ({
  square,
  time,
  randomNumber,
  hitCorrectSquareHandler,
}) => (
  <button
    onClick={() => hitCorrectSquareHandler(square)}
    className={`${
      square === randomNumber ? styles.squareActive : styles.square
    }`}
    key={square}
    disabled={time === 0}
  >
    <span className={styles.homer}>
      <img src={homer} />
    </span>
    <span className={styles.donut}>
      <img src={donut} />
    </span>
  </button>
);
