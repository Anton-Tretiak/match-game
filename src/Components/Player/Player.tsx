import React, { useState } from 'react';
import './Player.scss';

import { CurrentPlayer } from '../../Types/CurrentPlayer';

import { ButtonGroup } from '../ButtonGroup/ButtonGroup';

type Props = {
  currentPlayer: CurrentPlayer;
  matchesRemaining: number;
  playerAmount: number;
  onUserMove: (userMove: number) => void;
  customMatchesRemaining: number;
  customNMatches: number;
};
export const Player: React.FC<Props> = (
  {
    currentPlayer,
    matchesRemaining,
    playerAmount,
    onUserMove,
    customMatchesRemaining,
    customNMatches
  }) => {
  const [customTake, setCustomTake] = useState(0);
  
  return (
    <div className='player content'>
      <h3 id={currentPlayer === CurrentPlayer.User ? 'player__active' : ''}>
        You 🧑
      </h3>
      
      <span>Take matches:</span>
      
      {(customMatchesRemaining === 0 && customNMatches === 0)
        ? (
          <ButtonGroup
            currentPlayer={currentPlayer}
            onUserMove={onUserMove}
            matchesRemaining={matchesRemaining}
          />
        )
        : (
          <div className='player__custom-match-input'>
            {customTake > customNMatches && (
              <span className='player__warning'>You can't take more then {customNMatches} matches!</span>
            )}
            
            <input
              type='number'
              className='input'
              placeholder="Enter a number"
              value={customTake !== 0 ? customTake : ''}
              onChange={(e) => setCustomTake(Number(e.target.value))}
            />
            
            <button
              className='button is-success'
              onClick={() => {
                onUserMove(customTake);
                setCustomTake(0);
              }}
              disabled={customTake > customNMatches || customTake === 0}
            >
              Take
            </button>
          </div>
        )
      }
      
      <span>Amount of mathches: {playerAmount}</span>
    </div>
  );
}
