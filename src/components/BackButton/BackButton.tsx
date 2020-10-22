import React from 'react';
import { Link } from 'react-router-dom';

import './BackButton.css';

function BackButton() {
  return (
    <div id="back-button">
      <Link to="/">
        <h4>Back</h4>
      </Link>
    </div>
  )
}

export default BackButton;
