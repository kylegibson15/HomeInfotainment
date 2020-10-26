import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import BackButton from './BackButton.component';
import { DefaultPage as Page, HikesPage, MainPage, SkiMap } from './Pages';

import styles from '../styles';
import { IRoute } from '../state/interfaces';

const routes: IRoute[] = [
  { path: '/skimap', name: 'Ski Map', Component: SkiMap },
  { path: '/hikes', name: 'Hikes', Component: HikesPage },
  { path: '/events', name: 'Events', Component: Page },
  { path: '/weather', name: 'Weather', Component: Page },
  { path: '/news', name: 'News', Component: Page },
  { path: '/bus', name: 'Bus', Component: Page },
  { path: '/house', name: 'Around the House', Component: Page },
  { path: '/food', name: 'Food', Component: Page }
]

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Switch>
          <Route exact path="/">
            <MainPage routes={routes} />
          </Route>
          <Route path="*">
            {routes.map(({ path, name, Component }) =>
              <Route key={path} exact path={path}>
                <Component />
                <BackButton />
              </Route>
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
