import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '@pages/home';
import Portfolio from '@pages/portfolio';
import ScreenWidthContextProvider from '@root/context/screenWidthContext';
import NavContextProvider from '@root/context/navContext';

const App = () => {
  console.log('hey orry');
  return (
    <ScreenWidthContextProvider>
      <NavContextProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
          </Switch>
        </Router>
      </NavContextProvider>
    </ScreenWidthContextProvider>
  );
};

render(<App />, document.getElementById('app'));
