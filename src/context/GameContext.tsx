import React, { useState, useContext, createContext, useEffect } from 'react';
import { useTimer } from 'hooks/useTimer';
import { count } from 'console';

type GameConxtextProps = {
  setGameOn: React.Dispatch<React.SetStateAction<boolean>>;
  gameOn: boolean;
  squares: number[];
  points: number;
  time: number;
  randomNumber: any;
  hitCorrectSquareHandler: any;
};

export const GameContext = createContext<GameConxtextProps | undefined>(
  undefined
);

const GameProvider: React.FC = ({ children }) => {
  const gameSpeed = 650;
  const [gameOn, setGameOn] = useState(false);
  const [squares] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const { time } = useTimer(5, gameOn);
  const [points, setPoints] = useState(0);
  const [randomNumber, setRandomNumber] = useState<number | null>();

  useEffect(() => {
    if (gameOn) {
      const intervalId = setInterval(() => {
        getRandomSquare();
      }, gameSpeed);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [gameOn]);

  const hitCorrectSquareHandler = (squareNumber: number) => {
    if (randomNumber === squareNumber) {
      setPoints((prev) => prev + 1);
      setRandomNumber(null);
    }
  };

  const getRandomSquare = () => {
    const randomNumber = Math.floor(Math.random() * squares.length + 1);
    setRandomNumber(randomNumber);
  };

  return (
    <GameContext.Provider
      value={{
        gameOn,
        setGameOn,
        points,
        squares,
        time,
        randomNumber,
        hitCorrectSquareHandler,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = (): GameConxtextProps => {
  const ctx = useContext(GameContext);
  if (ctx === undefined) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return ctx;
};

export default GameProvider;
