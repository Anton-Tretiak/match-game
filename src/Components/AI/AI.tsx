import React, { useEffect } from 'react';
import './AI.scss';

import { CurrentPlayer } from '../../Types/CurrentPlayer';

type Props = {
  currentPlayer: CurrentPlayer;
  matchesRemaining: number;
  aiAmount: number;
  onAIMove: (aiMove: number) => void;
  customMatchesRemaining: number;
  customNMatches: number;
};

export const AI: React.FC<Props> = (
  {
    currentPlayer,
    matchesRemaining,
    onAIMove,
    aiAmount,
    customMatchesRemaining,
    customNMatches
  }) => {
  const makeMove = () => {
    const remainingMatches = matchesRemaining;
    let maxMatches;
    let aiMove = 1;
    
    if (customMatchesRemaining === 0 || customNMatches === 0) {
      maxMatches = Math.min(remainingMatches, 3);
    } else {
      maxMatches = Math.min(remainingMatches, customNMatches);
    }
    
    console.log(customMatchesRemaining);
    console.log(maxMatches);
    
    if (remainingMatches <= maxMatches) {
      aiMove = remainingMatches;
    } else if ((remainingMatches - 1) % (maxMatches + 1) === 0) {
      aiMove = 1;
    } else {
      for (let i = 2; i <= maxMatches; i++) {
        if ((remainingMatches - i) % (maxMatches + 1) === 0) {
          aiMove = i;
          break;
        }
      }
    }
    
    setTimeout(() => {
      if (matchesRemaining > 0) {
        onAIMove(aiMove);
      }
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
