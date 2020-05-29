import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Sentry from '@sentry/browser';
import Header from './components/Header';
import { FooterContainer } from './components/Footer';
import HomeContainer from './containers/Home';
import ArticlesContainer from './containers/Articles';

const App = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      Sentry.init({
        dsn:
          'https://89bd7ecf4005411bb1d2744a7fd5bea2@o386541.ingest.sentry.io/5220971'
      });
    }
  }, []);
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/articles">
          <ArticlesContainer />
        </Route>
        <Route path="/">
          <HomeContainer />
        </Route>
      </Switch>
      <FooterContainer />
    </Router>
  );
};

export { App };
