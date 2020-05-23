import React from 'react';
import * as Sentry from '@sentry/browser';

import { ContactInfoContainer } from './components/ContactInfo';
import Header from './components/Header';

import { FooterContainer } from './components/Footer';

import { ArticlePage } from './components/Pages/ArticleDetails';

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
        <ArticlePage />
        {/* <Welcome />
        <ActivitiesContainer />
        <FeaturedBannerContainer />
        <CausesContainer />
        <NumbersContainer />
        <UpcomingEventsSectionContainer />
        <TestimonialsContainer />
        <WorkStyleContainer />
        <NewsConatiner />
        <SponsersContainer /> */}
        <ContactInfoContainer />
        <FooterContainer />
      </>
    );
  }
}

export { App };
