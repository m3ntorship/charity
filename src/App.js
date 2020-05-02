import React from 'react';
import * as Sentry from '@sentry/browser';
import WorkStyle from './components/WorkStyle';
import Numbers from './components/Numbers';
import FeaturedBanner from './components/FeaturedBanner';
import Causes from './components/Causes';
import Sponsers from './components/Sponsers';
import Activities from './components/Activities';
import Welcome from './components/Welcome';
import { ContactInfo } from './components/ContactInfo';
import Header from './components/Header';
import UpcomingEvents from './components/UpcomingEvents';
import MainSlider from './components/MainSlider';
import Footer from './components/Footer';
import NewsAndArticles from './components/NewsAndArticles';


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
        <Activities />
        <FeaturedBanner />
        <Causes />
        <Numbers />
        <UpcomingEvents />
        <MainSlider />
        <WorkStyle />
        <NewsAndArticles />
        <Sponsers />
        <ContactInfo />
        <Footer />
      </>
    );
  }
}

export { App };
