import React from 'react';
import { WorkStyleContainer } from './components/WorkStyle';
import { FeaturedBannerContainer } from './components/FeaturedBanner';
import { NumbersContainer } from './components/Numbers';
import { CausesContainer } from './components/Causes';
import { SponsersContainer } from './components/Sponsers';
import { ActivitiesContainer } from './components/Activities';
import Welcome from './components/Welcome';
import { ContactInfoContainer } from './components/ContactInfo';
import { TestimonialsContainer } from './components/Testimonials';
import { UpcomingEventsSectionContainer } from './components/UpcomingEvents';
import { FooterContainer } from './components/Footer';
import { NewsConatiner } from './components/NewsAndArticles';
import { HeaderCarouselContainer } from './components/HeaderCarousel';

const Home = () => {
  return (
    <>
      <HeaderCarouselContainer />
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
