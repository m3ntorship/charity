import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Sentry from '@sentry/browser';
import Header from './components/Header';
import HomeContainer from './containers/Home';
import ArticlesContainer from './containers/Articles';
<<<<<<< HEAD
import { FooterContainer } from './containers/layout/footer';
=======

import {FooterContainer } from './containers/Home/footer'
>>>>>>> 9bcd52df44ed497b0bf8696e0956f2b48332714d
import { useDispatch } from 'react-redux';
import { useCharityAPI } from './clients';
import {
  setPagesDataActionCreator,
  setPagesLoadingActionCreator,
  setPagesErrorActionCreator
} from './store/actions';
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

<<<<<<< HEAD
=======
  const {
    data: footerData,
    dataError: footerError,
    loading: footerLoading
  } = useCharityAPI('/footer');

>>>>>>> 9bcd52df44ed497b0bf8696e0956f2b48332714d
  //Fetching Data
  const {
    data: pagesData,
    dataError: pagesError,
    loading: pagesLoading
  } = useCharityAPI('/pages?published=true');

  const {
    data: footerData,
    dataError: footerError,
    loading: footerLoading
  } = useCharityAPI('/footer');

  /*------------------
  Dispatching Actions
  --------------------*/
  const dispatch = useDispatch();

  //Pages Actions
  dispatch(setPagesDataActionCreator(pagesData));
  dispatch(setPagesLoadingActionCreator(pagesLoading));
  dispatch(setPagesErrorActionCreator(pagesError));
  
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
