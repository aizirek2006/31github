import React, { useState, useEffect } from "react";
import Snake from "./Snake";
import Food from "./Food";

const getRandomCoordinates = () => {
  const x = Math.floor(Math.random() * 20) * 20;
  const y = Math.floor(Math.random() * 20) * 20;
  return { x, y };
};

const Game = () => {
  const [snake, setSnake] = useState([{ x: 0, y: 0 }]);
  const [food, setFood] = useState(getRandomCoordinates());
  const [direction, setDirection] = useState("RIGHT");

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case "ArrowUp":
          setDirection("UP");
          break;
        case "ArrowDown":
          setDirection("DOWN");
          break;
        case "ArrowLeft":
          setDirection("LEFT");
          break;
        case "ArrowRight":
          setDirection("RIGHT");
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const moveSnake = () => {
      setSnake((prevSnake) => {
        const newSnake = prevSnake.map((segment) => ({ ...segment }));
        const head = { ...newSnake[0] };

        switch (direction) {
          case "UP":
            head.y -= 20;
            break;
          case "DOWN":
            head.y += 20;
            break;
          case "LEFT":
            head.x -= 20;
            break;
          case "RIGHT":
            head.x += 20;
            break;
          default:
            break;
        }
        

        newSnake.unshift(head);

        // Check for collision with food
        if (head.x === food.x && head.y === food.y) {
          setFood(getRandomCoordinates());
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    };

    const interval = setInterval(() => {
      moveSnake();
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [direction, food]);

  return (
    <div>
      <Snake snake={snake} />
      <Food food={food} />
    </div>
  );
};

export default Game;
