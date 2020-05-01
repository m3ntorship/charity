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
        <section className="feedback bg-c100 relative">
          <div className="container">
            <div className="feedback__heading">
              <div className="grid grid-cols-3">
                <h2 className="text-c000 text-xl col-span-2 font-black">
                  What They Are
                  <span className="text-c200 border-b-2 font-hairline">
                    Saying?
                  </span>
                </h2>
                <div className="text-c700 font-hairline">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing
                    elit sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="feedback__carousel grid absolute container">
              <figure className="feedback__carousel__quote text-c100 relative bg-c000 py-12 px-24 flex flex-col items-center justify-center">
                <img
                  className="rounded-full mx-auto"
                  src="https://picsum.photos/90/90"
                  alt="nile"
                />
                <blockquote className="feedback__quote__text mt-8 mb-4 text-center">
                  <p className="mb-8 leading-normal font-hairline">
                    This is due to their excellent service, competitive pricing
                    and customer support. It’s throughly refresing to get such a
                    personal touch.
                  </p>
                  <h4 className="text-c200 font-medium text-md font-semibold mb-2">
                    Christine Rose
                  </h4>
                  <p className="leading-normal text-c600 text-base">Feedback</p>
                </blockquote>
              </figure>

              <div className="feedback__carousel__back-arrow bg-c800 flex items-center justify-center text-lg">
                <a href="#a" className="justify-center items-center flex">
                  <div className="text-c700 rounded-full border-solid justify-center items-center flex p-4 border-2 border-c700 hover:border-c100 hover:bg-c100 hover:text-c800 cursor-pointer">
                    <i className="fas fa-arrow-left"></i>
                  </div>
                </a>
              </div>
              <div className="feedback__carousel__forward-arrow bg-c800 flex items-center justify-center text-lg">
                <a href="#a" className="justify-center items-center flex">
                  <div className="text-c700 justify-center items-center flex rounded-full border-solid p-4 border-2 border-c700 hover:border-c100 hover:bg-c100 hover:text-c800 cursor-pointer">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </a>
              </div>
              <div className="feedback__carousel__picker bg-c800 flex items-center justify-center text-lg">
                <i className="fas fa-dot-circle text-c200 mr-1 cursor-pointer"></i>
                <i className="fas fa-dot-circle text-c700 mr-1 cursor-pointer"></i>
                <i className="fas fa-dot-circle text-c700 cursor-pointer"></i>
              </div>
            </div>
          </div>
        </section>
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
