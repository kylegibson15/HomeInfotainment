import React from 'react';

import { useAnimation } from '../../hooks';

import './styles/Pendulum.css';

function Pendulum() {
  useAnimation('#rod', 'pendulum');
  return (
    <div id="rod">
      <div id="pivot"></div>
      <div id="ball"></div>
    </div>
  )
};

export default Pendulum;
