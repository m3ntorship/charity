import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Sentry from '@sentry/browser';
import Header from './components/Header';
import HomeContainer from './containers/Home';
import ArticlesContainer from './containers/Articles';
import { FooterContainer } from './containers/layout/footer';
import { useDispatch } from 'react-redux';
import { useCharityAPI } from './clients';
import {
  setPagesDataActionCreator,
  setPagesLoadingActionCreator,
  setPagesErrorActionCreator,
  setFooterData,
  setFooterLoading,
  setFooterError,
  setLogoData,
  setLogoLoading,
  setLogoError,
  setMainContactData,
  setMainContactLoading,
  setMainContactError,
  setArticlesData,
  setArticlesLoading,
  setArticlesError,
  setContactTopDataActionCreator,
  setContactTopLoadingActionCreator,
  setContactTopErrorActionCreator
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

  //Fetching Data
  const {
    data: pagesData,
    dataError: pagesError,
    loading: pagesLoading
  } = useCharityAPI('/pages?published=true');

  const {
    data: logoData,
    dataError: logoError,
    loading: logoLoading
  } = useCharityAPI('/logo');

  const {
    data: mainContactData,
    dataError: mainContactError,
    loading: mainContactLoading
  } = useCharityAPI('/main-contacts');

  const {
    data: articlesData,
    loading: articlesLoading,
    dataError: articlesError
  } = useCharityAPI('/articles?_sort=createdAt:DESC');
  const {
    data: contactTopData,
    loading: contactTopLoading,
    dataError: contactTopError
  } = useCharityAPI('/socialmedias');
  /*------------------
Dispatching Actions
--------------------*/
  const dispatch = useDispatch();

  //Articles Actions
  dispatch(setArticlesData(articlesData));
  dispatch(setArticlesLoading(articlesLoading));
  dispatch(setArticlesError(articlesError));

  //Pages Actions
  dispatch(setPagesDataActionCreator(pagesData));
  dispatch(setPagesLoadingActionCreator(pagesLoading));
  dispatch(setPagesErrorActionCreator(pagesError));

  // Footer
  dispatch(setFooterData(footerData));
  dispatch(setFooterLoading(footerLoading));
  dispatch(setFooterError(footerError));

  // Logo
  dispatch(setLogoData(logoData));
  dispatch(setLogoLoading(logoLoading));
  dispatch(setLogoError(logoError));

  // mainContacts action ---------
  dispatch(setMainContactData(mainContactData));
  dispatch(setMainContactLoading(mainContactLoading));
  dispatch(setMainContactError(mainContactError));

  dispatch(setContactTopDataActionCreator(contactTopData));
  dispatch(setContactTopLoadingActionCreator(contactTopLoading));
  dispatch(setContactTopErrorActionCreator(contactTopError));
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
