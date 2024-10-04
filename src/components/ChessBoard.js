import { render } from '@testing-library/react';
import './../ChessBoard.css';
import React from 'react'

const ChessBoard = () => {
    const renderSquare = (i,j) => {
        const isBlack = (i+j) % 2 === 1;
        const className = isBlack ? 'square black' : 'square white';
        return <div className={className} key={`${i}-${j}`}></div>;
    };
    

    const renderBoard = () => {
        const board = [];
        for (let i = 0;i < 8;i++){
            for (let j=0;j < 8;j++){
                board.push(renderSquare(i,j));
            }
        }
        return board;
    };
    return <div className='board'>{renderBoard()}</div>;
};

export default ChessBoard;