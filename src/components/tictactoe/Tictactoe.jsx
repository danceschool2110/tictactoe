import React, {useReducer, useState} from 'react';
import { calculateWinner } from '../../helper';
import Board from './Board';
import "./GameStyles.css"
const Tictactoe = () => {
    // const [board, setBorad] = useState(Array(9).fill(null))
    // const [xIsNext,setXIsNext] = useState(true);
    const [state, setState] = useState({
        board: Array(9).fill(null),
        xIsNext: true,
    });
    
    const winner = calculateWinner(state.board)
    const handleClick = (index) => {
        const boardCopy = [...state.board]
        if(winner || boardCopy[index]) return;
        boardCopy[index] = state.xIsNext ? 'x' : 'o'
        // setBorad(boardCopy)
        // setXIsNext(xIsNext => !xIsNext)
        setState({
            ...state,
            board: boardCopy,
            xIsNext: !state.xIsNext
        })
    }
    const handleResetGame = () => {
        // setBorad(Array(9).fill(null))
        // setXIsNext(true)
        setState({
            board: Array(9).fill(null),
            xIsNext: true,
        })
    }
    return (
        <div style={{marginLeft: '20px'}}>
            <Board cells={state.board} onClick={handleClick}></Board>
            {winner ? 
                <div className="game-winner">
                    Winner is {winner.toUpperCase()} 
                </div>
                : ""
            }
            <button className="game-reset" onClick={() => handleResetGame()}>Reset Game</button>
        </div>
    );
};

export default Tictactoe;