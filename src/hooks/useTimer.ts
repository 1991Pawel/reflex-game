import { useState, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useTimer = (initialValue: number, gameStatus: boolean) => {
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

  return { countDown, time, setTime };
};
