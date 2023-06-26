import React from 'react';

import { Player } from '../Player/Player';
import { AI } from '../AI/AI';

export const Game: React.FC = () => {
  return (
    <div>
      <p>Game Component</p>
      
      <Player />
      
      <AI />
    </div>
    
  );
}
