import React from 'react';
import { WorkStyleContainer } from '../../components/WorkStyle';
import { FeaturedBannerContainer } from '../../components/FeaturedBanner';
import { NumbersContainer } from '../../components/Numbers';
import { CausesContainer } from '../../components/Causes';
import { SponsersContainer } from '../../components/Sponsers';
import { ActivitiesContainer } from '../../components/Activities';
import { Welcome } from '../../components/Welcome';
import { ContactInfoContainer } from '../../components/ContactInfo';
import { TestimonialsContainer } from '../../components/Testimonials';
import { UpcomingEventsSectionContainer } from '../../components/UpcomingEvents';
import { NewsConatiner } from '../../components/NewsAndArticles';
import { HeaderCarouselContainer } from '../../components/HeaderCarousel';
import { useDispatch } from 'react-redux';
import { ACTION_TYPES } from '../../store';
import { useCharityAPI } from '../../clients';

const HomeContainer = () => {
  //Fetching Data
  const {
    data: numbersData,
    dataError: numbersError,
    loading: numbersLoading
  } = useCharityAPI('/speaking-numbers');

  const {
    data: testimonialsData,
    dataError: testimonialsError,
    loading: testimonialsLoading
  } = useCharityAPI('/what-they-say');

  //Dispatching Actions
  const dispatch = useDispatch();
  dispatch({
    type: ACTION_TYPES.ADD_HOME_DATA,
    payload: {
      numbers: {
        numbersData,
        numbersLoading,
        numbersError
      },
      testimonials: {
        testimonialsData,
        testimonialsLoading,
        testimonialsError
      }
    }
  });

  return <Home />;
};

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

export default HomeContainer;
