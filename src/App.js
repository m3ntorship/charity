import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Sentry from '@sentry/browser';
import { WorkStyleContainer } from './components/WorkStyle';
import { FeaturedBannerContainer } from './components/FeaturedBanner';
import { NumbersContainer } from './components/Numbers';
import { CausesContainer } from './components/Causes';
import { SponsersContainer } from './components/Sponsers';
import { ActivitiesContainer } from './components/Activities';
import Welcome from './components/Welcome';
import { ContactInfoContainer } from './components/ContactInfo';
import Header from './components/Header';
import { TestimonialsContainer } from './components/Testimonials';
import { UpcomingEventsSectionContainer } from './components/UpcomingEvents';
import { FooterContainer } from './components/Footer';
import { NewsConatiner } from './components/NewsAndArticles';
import { ArticlePage } from './components/Pages/ArticleDetails';
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

const Home = () => {
  return (
    <>
      <Welcome />
      <ActivitiesContainer />
      <FeaturedBannerContainer />
      <CausesContainer />
      <NumbersContainer />
      <UpcomingEventsSectionContainer />
      <TestimonialsContainer />
      <WorkStyleContainer />
      <NewsConatiner />
      <SponsersContainer />
      <ContactInfoContainer />
    </>
  );
};
const Articles = () => {
  return <ArticlePage />;
};

export { App };
