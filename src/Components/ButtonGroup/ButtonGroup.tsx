import React from 'react';
import './ButtonGroup.scss';

import { CurrentPlayer } from '../../Types/CurrentPlayer';

type Props = {
  currentPlayer: CurrentPlayer;
  onUserMove: (userMove: number) => void;
  matchesRemaining: number;
};

export const ButtonGroup: React.FC<Props> = (
  {
    currentPlayer,
    onUserMove,
    matchesRemaining,
  }) => {
  return (
    <div className='button-group'>
      <button
        className='button is-info'
        onClick={() => {
          onUserMove(1);
        }}
        disabled={currentPlayer !== CurrentPlayer.User
          || matchesRemaining === 0
        }
      >
        1
      </button>
      
      <button
        className='button is-info'
        onClick={() => {
          onUserMove(2);
        }}
        disabled={currentPlayer !== CurrentPlayer.User
          || matchesRemaining === 0
          || matchesRemaining < 2
        }
      >
        2
      </button>
      
      <button
        className='button is-info'
        onClick={() => {
          onUserMove(3);
        }}
        disabled={currentPlayer !== CurrentPlayer.User
          || matchesRemaining === 0
          || matchesRemaining < 3
        }
      >
        3
      </button>
    </div>
  );
};
