import React from 'react';
import styles from '../Modal/Modal.module.scss';

type ModalProps = {
  time: number;
  points: number;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Modal = ({ time, points }: ModalProps) => (
  <div>
    {!time && (
      <div className={styles.modal}>
        <h3>Game Over</h3>
        <p>your score : {points}</p>
      </div>
    )}
  </div>
);
