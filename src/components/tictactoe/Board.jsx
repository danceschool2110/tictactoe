import React from 'react';
import Cell from './Cell';
const Board = ({cells, onClick}) => {
    // console.log(props)
    // console.log("1")
    return (
        <div className="game-board">
        {
            cells.map((item,index) => (
                <Cell 
                    key={index} 
                    value={item} 
                    onClick={() => onClick(index)}
                    className={item ? item === 'x' ? 'is-x' : 'is-o' : ''}
                >
                </Cell>
            ))
        }
        </div>
    );
};

export default Board;