import React, {useState} from 'react';
import './GameSettings.scss';

type Props = {
  selectedStarter: string;
  onStarterChoose: (event:  React.ChangeEvent<HTMLSelectElement>) => void;
  handleCustomMatches: (num: number) => void;
  handleSettingNMatches: (num: number) => void;
  handleResetCustomSettings: () => void;
  customMatchesRemaining: number;
  customNMatches: number;
}
export const GameSettings: React.FC<Props> = (
  {
    selectedStarter,
    onStarterChoose,
    handleCustomMatches,
    handleSettingNMatches,
    handleResetCustomSettings,
    customMatchesRemaining,
    customNMatches
  }) => {
  const [matches, setMatches] = useState(0);
  const [matchesToTake, setMatchesToTake] = useState(0);
  
  const isValid: boolean = (Number(matches) % 2 !== 0)
    && (matches > 0)
    && (matchesToTake > 0)
    && (Number(matchesToTake) < Number(matches));
  
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    // form submission logic
    console.log('All Matches:', matches);
    console.log('Max to take matches:', matchesToTake);
    
    handleCustomMatches(matches);
    handleSettingNMatches(matchesToTake);
    
    setMatches(0);
    setMatchesToTake(0);
  };
  
  return (
    <div className='settings content'>
      <h4 className='settings__heading'>Settings</h4>
      
      <div className='settings__first-move'>
        <span>First move: </span>
        
        <div className="select is-info">
          <select value={selectedStarter} onChange={onStarterChoose}>
            <option>You</option>
            <option>AI</option>
          </select>
        </div>
      </div>
      
      <div className='settings__custom-game'>
        <h4>Custom Game</h4>
        
        <form onSubmit={handleFormSubmit}>
          <div className="field">
            <label className="label">Enter number of matches (only odd)</label>
            <div className="control">
              <input
                className="input"
                type="number"
                value={matches}
                onChange={(e) => setMatches(Number(e.target.value))}
                required
              />
            </div>
          </div>
          
          <div className="field">
            <label className="label">You can take from 1 to n matches. Enter n:</label>
            <div className="control">
              <input
                className="input"
                type="number"
                value={matchesToTake}
                onChange={(e) => setMatchesToTake(Number(e.target.value))}
                required
              />
            </div>
          </div>
          
          <div className="field">
            <div className="control">
              <button
                className="button is-success"
                type="submit"
                disabled={!isValid}
              >
                Set new values
              </button>
            </div>
          </div>
        </form>
        
        <button
          className='button is-danger settings__reset-button'
          onClick={handleResetCustomSettings}
          disabled={customMatchesRemaining === 0 && customNMatches === 0}
        >
          Reset Settings
        </button>
      </div>
    </div>
  );
};
