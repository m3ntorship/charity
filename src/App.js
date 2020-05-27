import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Sentry from '@sentry/browser';
import { ArticlePage } from './components/Pages/ArticleDetails';
import Header from './components/Header';

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
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/articles">
          <Articles />
        </Route>
      </Switch>
      <FooterContainer />
    </Router>
  );
};

const Articles = () => {
  return <ArticlePage />;
};

export { App };
