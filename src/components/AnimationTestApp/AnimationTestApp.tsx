import React from 'react';

import animation from '../../hooks/animations';

import './App.css';

function App() {
  function handleClick(card: string) {
    const animeFn = animation.get('ski-move');
    if (animeFn) {
      animeFn.skimap('.card.skimap');
      animeFn.home('.card.home');
      animeFn.events('.card.events');
      animeFn.something('.card.something');
      animeFn.other('.card.other');
      animeFn.hikes('.card.hikes');
      animeFn.news('.card.news');
      animeFn.food('.card.food');
    }
  }

  return (
    <div className="container">
      <div className='card top-row skimap' onClick={() => handleClick('skimap')}>Ski Map</div>
      <div className='card top-row news' onClick={() => handleClick('news')}>News</div>
      <div className='card top-row food' onClick={() => handleClick('food')}>Food</div>
      <div className='card top-row hikes' onClick={() => handleClick('hikes')}>Hikes</div>

      <div className='card bottom-row home' onClick={() => handleClick('home')}>Home</div>
      <div className='card bottom-row events' onClick={() => handleClick('events')}>Events</div>
      <div className='card bottom-row something' onClick={() => handleClick('something')}>Something</div>
      <div className='card bottom-row other' onClick={() => handleClick('other')}>Other</div>
    </div>
  );
}

export default App;
