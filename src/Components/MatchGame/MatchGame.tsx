import React, {useState} from 'react';
import './MatchGame.scss';

import {CurrentPlayer} from '../../Types/CurrentPlayer';

import {Player} from '../Player/Player';
import {AI} from '../AI/AI';
import {GameEnd} from '../GameEnd/GameEnd';
import {GameSettings} from '../GameSettings/GameSettings';
import {Info} from '../Info/Info';

export const MatchGame: React.FC = () => {
  const [matchesRemaining, setMatchesRemaining] = useState(25);
  const [currentPlayer, setCurrentPlayer] = useState<CurrentPlayer>(CurrentPlayer.None);
  const [playerAmount, setPlayerAmount] = useState(0);
  const [aiAmount, setAIAmount] = useState(0);
  // settings states
  const [selectedStarter, setSelectedStarter] = useState('You');
  
  const handleUserMove = (userMove: number) => {
    setMatchesRemaining(matchesRemaining - userMove);
    setPlayerAmount(playerAmount + userMove);
    setCurrentPlayer(CurrentPlayer.AI);
  };
  
  const handleAIMove = (aiMove: number) => {
    setMatchesRemaining(matchesRemaining - aiMove);
    setAIAmount(aiAmount + aiMove);
    setCurrentPlayer(CurrentPlayer.User);
  };
  
  const handleStarterChoose = (event:  React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStarter(event.target.value);
  };
  
  const renderMatches = () => {
    const matchSymbol = '📍';
    if (matchesRemaining > 0) {
      const matches = matchSymbol.repeat(matchesRemaining);
      return <div className="matches">{matches}</div>;
    }
  };
  
  const clearStates = () => {
    setMatchesRemaining(25);
    setCurrentPlayer(CurrentPlayer.None);
    setPlayerAmount(0);
    setAIAmount(0);
  };
  
  return (
    <>
      <div className='game content'>
        <Player
          currentPlayer={currentPlayer}
          matchesRemaining={matchesRemaining}
          playerAmount={playerAmount}
          onUserMove={handleUserMove}
        />
        
        {matchesRemaining === 0
          ? (
            <GameEnd
              aiAmount={aiAmount}
              clearStates={clearStates}
            />
          )
          : (
            <div className='game__info'>
              <h4 className='game__heading'>Matches: {matchesRemaining}</h4>
              
              {renderMatches()}
              
              {currentPlayer === CurrentPlayer.None ? (
                <button
                  className='button is-success'
                  onClick={() => {
                    if (selectedStarter === 'You') {
                      setCurrentPlayer(CurrentPlayer.User);
                    } else {
                      setCurrentPlayer(CurrentPlayer.AI);
                    }
                  }}
                >
                  Start
                </button>
              ) : (
                <button
                  className='button is-success'
                  onClick={() => {
                    clearStates();
                    
                    if (selectedStarter === 'You') {
                      setCurrentPlayer(CurrentPlayer.User);
                    } else {
                      setCurrentPlayer(CurrentPlayer.AI);
                    }
                  }}
                  disabled={matchesRemaining === 25}
                >
                  Restart
                </button>
              )}
            </div>
          )}
        
        <AI
          currentPlayer={currentPlayer}
          matchesRemaining={matchesRemaining}
          aiAmount={aiAmount}
          onAIMove={handleAIMove}
        />
      </div>
      
      <div className='additional'>
        <GameSettings
          selectedStarter={selectedStarter}
          onStarterChoose={handleStarterChoose}
        />
        
        <Info />
      </div>
    </>
  );
}
