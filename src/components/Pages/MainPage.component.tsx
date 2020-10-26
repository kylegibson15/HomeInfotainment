import React from 'react';

import { Link } from 'react-router-dom';

import styles from '../../styles';
import { IMainPageProps } from '../../state/interfaces';


function Main({ routes }: IMainPageProps) {
  return (
    <div className={styles.mainNav}>
      {routes.map(
        ({ path, name }) => (
          <Link key={name} to={path}>
            <div className={styles.page}>
              {name}
            </div>
          </Link>
        ))}
    </div>
  )
}

export default Main;
