import React from 'react';

type Props = {
  playerAmount: number;
  aiAmount: number;
  clearStates: () => void;
};
export const GameEnd: React.FC<Props> = ({ clearStates, playerAmount, aiAmount }) => {
  return (
    <div className='game__end'>
      {aiAmount % 2 === 0
        ? (
          <h4>Oops! Artificial intelligence won!☹️☹️</h4>
        )
        : (
          <h4>Congratulations! You won!🥳🥳</h4>
        )}
      
      <button
        className='button is-success'
        onClick={clearStates}
      >
        Play again
      </button>
    </div>
  );
};
