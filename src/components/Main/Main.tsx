import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import './Main.css';

interface IProps {
  routes: { path: string; name: string; Component: () => JSX.Element }[];
}

function Main({ routes }: IProps) {
  const history = useHistory();

  function handleClick() {
    history.push('/');
  }

  return (
    <div id="main-nav">
      {routes.map(
        ({ path, name }) => (
          <Link key={name} to={path} onClick={handleClick}>
            <div className={`page ${path.split('/')[1]}`}>
              {name}
            </div>
          </Link>
        ))}
    </div>
  )
}

export default Main;
