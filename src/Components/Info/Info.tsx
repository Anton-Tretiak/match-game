import React from 'react';
import './Info.scss';

export const Info: React.FC = () => {
  return (
    <div className='info content'>
      <h4>Rules</h4>
      
      <p>Hi, friend! 😀</p>
      
      <p>
        It's a match game and I want to tell you the rules. You will play against a bot. You two have 25 matches, you take turns taking 1 or 2 or 3 matches. The game ends when all the matches have been taken apart. The one who managed to take an even number of matches wins. I think the basic interface is clear to you (you have three buttons 1, 2, 3, whichever you press, you will take as many).
      </p>
      
      <p>
        Now let's move on to the settings block. Here you can choose who will go first, as well as create your own game. You can specify any number of matches in the pile (an odd number is required). And also choose how many matches each of you can take. And that is all!
      </p>
      
      <p>Good luck 😉</p>
    </div>
  );
};
