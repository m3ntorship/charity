import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Sentry from '@sentry/browser';
import Header from './components/Header';
import HomeContainer from './containers/Home';
import ArticlesContainer from './containers/Articles';
import { useCharityAPI } from './clients';
import {FooterContainer } from './containers/Home/footer'
import { useDispatch } from 'react-redux';

import {
  setFooterData,
  setFooterLoading,
  setFooterError
} from './store/actions';



const App = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      Sentry.init({
        dsn:
          'https://89bd7ecf4005411bb1d2744a7fd5bea2@o386541.ingest.sentry.io/5220971'
      });
    }
  }, []);

  const {
    data: footerData,
    dataError: footerError,
    loading: footerLoading
  } = useCharityAPI('/footer');

  const dispatch = useDispatch();

  // Footer
  dispatch(setFooterData(footerData));
  dispatch(setFooterLoading(footerLoading));
  dispatch(setFooterError(footerError));

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
