import React from 'react';
import './Player.scss';

import { CurrentPlayer } from '../../Types/CurrentPlayer';

import { ButtonGroup } from '../ButtonGroup/ButtonGroup';

type Props = {
  currentPlayer: CurrentPlayer;
  matchesRemaining: number;
  playerAmount: number;
  onUserMove: (userMove: number) => void;
};
export const Player: React.FC<Props> = (
  {
    onUserMove,
    matchesRemaining,
    currentPlayer,
    playerAmount,
  }) => {
  return (
    <div className='player content'>
      <h3>Player 👨</h3>
      
      <span>Take matches:</span>
      
      <ButtonGroup
        currentPlayer={currentPlayer}
        onUserMove={onUserMove}
        matchesRemaining={matchesRemaining}
      />
      
      <span>Amount of mathches: {playerAmount}</span>
    </div>
  );
}
