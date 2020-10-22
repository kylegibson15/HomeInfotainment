import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { BackButton } from './BackButton';
import { Main } from './Main';
import { Page, Hikes } from './Page';

import './App.css';

const routes = [
  { path: '/skimap', name: 'Ski Map', Component: Page },
  { path: '/hikes', name: 'Hikes', Component: Hikes },
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
      <div id="app">
        <Switch>
          <Route exact path="/">
            <Main routes={routes} />
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
