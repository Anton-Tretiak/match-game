import React from 'react';
import './Player.scss';

import { CurrentPlayer } from '../../Types/CurrentPlayer';

import { ButtonGroup } from '../ButtonGroup/ButtonGroup';

type Props = {
  currentPlayer: CurrentPlayer;
  matchesRemaining: number;
  playerAmount: number;
  activeButton: number;
  onUserMove: (userMove: number) => void;
  onMatchButtonClick: (id: number) => void;
};
export const Player: React.FC<Props> = (
  {
    onUserMove,
    matchesRemaining,
    currentPlayer,
    playerAmount,
    activeButton,
    onMatchButtonClick
  }) => {
  return (
    <div className='player content'>
      <h3>Player 👨</h3>
      
      <span>Take matches:</span>
      
      <ButtonGroup
        currentPlayer={currentPlayer}
        onUserMove={onUserMove}
        matchesRemaining={matchesRemaining}
        activeButton={activeButton}
        onMatchButtonClick={onMatchButtonClick}
      />
      
      <span>Amount of mathches: {playerAmount}</span>
    </div>
  );
}
