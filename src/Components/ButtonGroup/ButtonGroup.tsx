import React from 'react';
import './ButtonGroup.scss';

import { CurrentPlayer } from '../../Types/CurrentPlayer';

type Props = {
  currentPlayer: CurrentPlayer;
  onUserMove: (userMove: number) => void;
  matchesRemaining: number;
  activeButton: number;
  onMatchButtonClick: (id: number) => void;
};

export const ButtonGroup: React.FC<Props> = (
  {
    onUserMove,
    currentPlayer,
    matchesRemaining,
    activeButton,
    onMatchButtonClick
  }) => {
  return (
    <div className='button-group'>
      <button
        className='button is-info'
        onClick={() => {
          onUserMove(1);
          onMatchButtonClick(1);
        }}
        disabled={currentPlayer !== CurrentPlayer.User
          || matchesRemaining === 0
          || activeButton === 1
        }
      >
        1
      </button>
      
      <button
        className='button is-info'
        onClick={() => {
          onUserMove(2);
          onMatchButtonClick(2);
        }}
        disabled={currentPlayer !== CurrentPlayer.User
          || matchesRemaining === 0
          || activeButton === 2
        }
      >
        2
      </button>
      
      <button
        className='button is-info'
        onClick={() => {
          onUserMove(3);
          onMatchButtonClick(3);
        }}
        disabled={currentPlayer !== CurrentPlayer.User
          || matchesRemaining === 0
          || activeButton === 3
        }
      >
        3
      </button>
    </div>
  );
};
