import React, { useState, useContext, createContext, useEffect } from 'react';
import { useTimer } from 'hooks/useTimer';

type GameConxtextProps = {
  setGameOn: React.Dispatch<React.SetStateAction<boolean>>;
  gameOn: boolean;
  getReady: boolean;
  squares: number[];
  points: number;
  time: number;
  randomNumber: number | null;
  countDownMessage: number;
  hitCorrectSquareHandler: (squareNumber: number) => void;
  resetGame: () => void;
  startGame: () => void;
};

export const GameContext = createContext<GameConxtextProps | undefined>(
  undefined
);

const GameProvider: React.FC = ({ children }) => {
  const [getReady, setGetReady] = useState(false);
  const [gameOn, setGameOn] = useState(false);
  const [squares] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const { time, setTime } = useTimer(30, gameOn);
  const [points, setPoints] = useState(0);
  const [randomNumber, setRandomNumber] = useState<number | null>(null);
  const gameSpeed = 600;
  const [countDownMessage, setCountDownMessage] = useState(3);

  useEffect(() => {
    if (countDownMessage === 0) {
      setGameOn(true);
      setGetReady(false);
    }
    if (getReady && countDownMessage > 0) {
      const intervalId = setTimeout(() => {
        setCountDownMessage((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [countDownMessage, getReady]);

  useEffect(() => {
    if (gameOn && time > 0) {
      const intervalId = setInterval(() => {
        getRandomSquare();
      }, gameSpeed);

      return () => clearInterval(intervalId);
    }
  }, [gameOn, time]);

  const startGame = () => {
    setGetReady(true);
  };
  const resetGame = () => {
    setGetReady(false);
    setGameOn(false);
    setRandomNumber(null);
    setPoints(0);
    setTime(30);
    setCountDownMessage(3);
  };

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
        startGame,
        setGameOn,
        points,
        squares,
        time,
        randomNumber,
        hitCorrectSquareHandler,
        resetGame,
        countDownMessage,
        getReady,
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
