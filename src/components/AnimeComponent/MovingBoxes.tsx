import React from 'react';

// import { useAnimation } from '../../hooks';
import './styles/MovingBoxes.css';

function MovingBoxes() {
  // useAnimation('#content', 'move');

  return (
    <>
      <div id="box" className="size"></div>
      <div id="content" className="size"></div>
    </>
  )
}

export default MovingBoxes;
