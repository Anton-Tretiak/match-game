import React, {useEffect} from 'react';
import './AI.scss';

import { CurrentPlayer } from '../../Types/CurrentPlayer';

type Props = {
  currentPlayer: CurrentPlayer;
  matchesRemaining: number;
  aiAmount: number;
  onAIMove: (aiMove: number) => void;
};

export const AI: React.FC<Props> = (
  {
    currentPlayer,
    matchesRemaining,
    onAIMove,
    aiAmount,
  }) => {
  const makeMove = () => {
    let aiMove = 1;
    
    if ((matchesRemaining - 1) % 4 === 0) {
      aiMove = 1;
    } else if ((matchesRemaining - 2) % 4 === 0) {
      aiMove = 2;
    } else if ((matchesRemaining - 3) % 4 === 0) {
      aiMove = 3;
    } else {
      // No winning move, so choose randomly
      const possibleMoves = [1, 2, 3];
      aiMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    }
    
    setTimeout(() => {
      onAIMove(aiMove);
    }, 1000);
  };
  
  useEffect(() => {
    if (currentPlayer === CurrentPlayer.AI) {
      makeMove();
    }
  }, [currentPlayer]);
  
  return (
    <div className='ai content'>
      <h3>AI 🤖</h3>
      
      <span>Take matches:</span>
      
      <div className='button-group'>
        <button className='button is-info' disabled>1</button>
        
        <button className='button is-info' disabled>2</button>
        
        <button className='button is-info' disabled>3</button>
      </div>
      
      <span>Amount of mathches: {aiAmount}</span>
    </div>
  );
}
