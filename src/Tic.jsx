import React, { useState } from 'react';
import './Tic.css'; 

function Tic() {
    const [boxes, setBoxes] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (i) => {
        if (boxes[i] || calculateWinner(boxes)) return;
        boxes[i] = xIsNext ? 'X' : 'O';
        setBoxes([...boxes]);
        setXIsNext(!xIsNext);
    };

    const winner = calculateWinner(boxes);
    const status = winner ? `Winner: ${winner}` : `Next: ${xIsNext ? 'X' : 'O'}`;

    return (
        <div className="game-container">
            <div className="status">{status}</div>
            <div className="board">
                {boxes.map((square, i) => (
                    <button
                        key={i}
                        onClick={() => handleClick(i)}
                        className={`square ${square ? square : ''}`}
                    >
                        {square}
                    </button>
                ))}
            </div>
            <button className="reset-button" onClick={() => setBoxes(Array(9).fill(null))}>Reset</button>
        </div>
    );
}

function calculateWinner(boxes) {
    const board = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let [a, b, c] of board) {
        if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
            return boxes[a];
        }
    }
    return null;
}

export default Tic;
