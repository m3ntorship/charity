import React from 'react';
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
import UpcomingEvents from './components/UpcomingEvents';
import Testimonials from './components/Testimonials';
import { FooterContainer } from './components/Footer';
import {NewsConatiner} from './components/NewsAndArticles';

class App extends React.Component {
  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      Sentry.init({
        dsn:
          'https://89bd7ecf4005411bb1d2744a7fd5bea2@o386541.ingest.sentry.io/5220971'
      });
    }
  }
  render() {
    return (
      <>
        <Header />
        <Welcome />
        <ActivitiesContainer />
        <FeaturedBannerContainer />
        <CausesContainer />
        <NumbersContainer />
        <UpcomingEvents />
        <Testimonials />
        <WorkStyleContainer />
        <NewsConatiner />
        <SponsersContainer />
        <ContactInfoContainer />
        <FooterContainer />
      </>
    );
  }
}

export { App };
