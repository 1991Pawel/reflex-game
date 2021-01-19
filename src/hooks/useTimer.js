import React, { useState, useEffect } from 'react';

export const useTimer = (initialValue, gameStatus) => {
  const [time, setTime] = useState(initialValue);

  useEffect(() => {
    if (time > 0 && gameStatus) {
      const timerInterval = setInterval(() => {
        countDown();
      }, 1000);

      return () => {
        clearInterval(timerInterval);
      };
    }
  }, [time, gameStatus]);

  const countDown = () => {
    setTime((prev) => prev - 1);
  };

  return { countDown, time };
};
