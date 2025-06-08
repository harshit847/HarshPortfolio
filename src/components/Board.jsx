import React, { useEffect, useState } from "react";

const BOARD_SIZE = 15;
const INITIAL_SNAKE = [{ x: 5, y: 5 }];
const INITIAL_DIRECTION = "RIGHT";

const getRandomPosition = () => ({
    x: Math.floor(Math.random() * BOARD_SIZE),
    y: Math.floor(Math.random() * BOARD_SIZE),
});


const SnakeGame = () => {
    const [snake, setSnake] = useState(INITIAL_SNAKE);
    const [food, setFood] = useState(getRandomPosition());
    const [direction, setDirection] = useState(INITIAL_DIRECTION);
    const [gameOver, setGameOver] = useState(false);

    const resetGame = () => {
        setSnake(INITIAL_SNAKE);
        setFood(getRandomPosition());
        setDirection(INITIAL_DIRECTION);
        setGameOver(false);
    };

    const changeDirection = (dir) => {
        if (dir === "UP" && direction !== "DOWN") setDirection("UP");
        if (dir === "DOWN" && direction !== "UP") setDirection("DOWN");
        if (dir === "LEFT" && direction !== "RIGHT") setDirection("LEFT");
        if (dir === "RIGHT" && direction !== "LEFT") setDirection("RIGHT");
    };


    useEffect(() => {
        if (gameOver) return;

        const move = () => {
            const head = { ...snake[0] };

            switch (direction) {
                case "UP": head.y = (head.y - 1 + BOARD_SIZE) % BOARD_SIZE; break;
                case "DOWN": head.y = (head.y + 1) % BOARD_SIZE; break;
                case "LEFT": head.x = (head.x - 1 + BOARD_SIZE) % BOARD_SIZE; break;
                case "RIGHT": head.x = (head.x + 1) % BOARD_SIZE; break;
                default: break;
            }

            if (snake.some(s => s.x === head.x && s.y === head.y)) {
                setGameOver(true);
                return;
            }

            const newSnake = [head, ...snake];

            if (head.x === food.x && head.y === food.y) {
                setFood(getRandomPosition());
            } else {
                newSnake.pop();
            }

            setSnake(newSnake);
        };

        const interval = setInterval(move, 200);
        return () => clearInterval(interval);
    }, [snake, direction, food, gameOver]);

    useEffect(() => {
        const handleKey = (e) => {
            if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
                e.preventDefault();
            }
            switch (e.key) {
                case "ArrowUp": if (direction !== "DOWN") setDirection("UP"); break;
                case "ArrowDown": if (direction !== "UP") setDirection("DOWN"); break;
                case "ArrowLeft": if (direction !== "RIGHT") setDirection("LEFT"); break;
                case "ArrowRight": if (direction !== "LEFT") setDirection("RIGHT"); break;
                default: break;
            }
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [direction]);

    return (
        <div className="flex flex-col items-center mt-8 pb-20 space-y-4">
            <h1 className="text-2xl font-edu font-bold text-purple-700">Lets Play...🐍</h1>
            <div
                className="grid gap-1"
                style={{
                    gridTemplateColumns: `repeat(${BOARD_SIZE}, 20px)`,
                    gridTemplateRows: `repeat(${BOARD_SIZE}, 20px)`
                }}
            >
                {Array.from({ length: BOARD_SIZE * BOARD_SIZE }).map((_, i) => {
                    const x = i % BOARD_SIZE;
                    const y = Math.floor(i / BOARD_SIZE);
                    const isSnake = snake.some(s => s.x === x && s.y === y);
                    const isFood = food.x === x && food.y === y;

                    return (
                        <div
                            key={i}
                            className={` w-5 h-5 border border-gray-300
                ${isSnake ? "bg-black rounded-md" : isFood ? "bg-red-500 rounded-md" : "bg-slate-400"}`}
                        ></div>
                    );
                })}
            </div>
            <div className="mt-4 sm:hidden flex flex-col items-center space-y-2">
                <button onClick={() => changeDirection("UP")} className="bg-gray-800 text-white px-4 py-2 rounded">⬆️</button>
                <div className="flex space-x-4">
                    <button onClick={() => changeDirection("LEFT")} className="bg-gray-800 text-white px-4 py-2 rounded">⬅️</button>
                    <button onClick={() => changeDirection("DOWN")} className="bg-gray-800 text-white px-4 py-2 rounded">⬇️</button>
                    <button onClick={() => changeDirection("RIGHT")} className="bg-gray-800 text-white px-4 py-2 rounded">➡️</button>
                </div>
            </div>
            {gameOver && <p className="text-red-600 font-semibold">Game Over!</p>}
            <h1 className="font-edu font-semibold text-indigo-400">Your Score : {snake.length}</h1>
            <button
                onClick={resetGame}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Restart
            </button>
        </div>
    );
};

export default SnakeGame;
