import React from 'react';

const Board0 = ({board, loading}) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <ul className='list-group mb-4'>
            {board.map(keyboard => (
                <li key={keyboard.id} className='list-group-item'>
                    {keyboard.brand}
                </li>
            ))}
        </ul>
    );
};

export default Board0;

// this page is an experiment: