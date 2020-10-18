import React from 'react';

import { useAnimation } from '../../hooks';

import './styles/Test.css';

export default function Test() {
  const animationRef = useAnimation('.el', 'easeInOut');
  return (
    <div>
      {/* <button onClick={animationRef('.el')?.restart}>Restart</button> */}
      <div className="el" />
    </div>
  );
}
