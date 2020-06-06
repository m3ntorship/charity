import React from 'react';
import { WorkStyleContainer } from '../../components/WorkStyle';
import { FeaturedBannerContainer } from '../../components/FeaturedBanner';
import { NumbersContainer } from './numbers';
import { CausesContainer } from '../../components/Causes';
import { SponsersContainer } from '../../components/Sponsers';
import { ActivitiesContainer } from '../../components/Activities';
import { Welcome } from '../../components/Welcome';
import { ContactInfoContainer } from '../../components/ContactInfo';
import { TestimonialsContainer } from './testimonials';
import { UpcomingEventsSectionContainer } from '../../components/UpcomingEvents';
import { NewsConatiner } from '../../components/NewsAndArticles';
import { HeaderCarouselContainer } from './headercarousel';
import { useDispatch } from 'react-redux';
import { useCharityAPI } from '../../clients';
import {
  setNumbersData,
  setNumbersLoading,
  setNumbersError
} from '../../store/actions';
import {
  setTestimonialsData,
  setTestimonialsLoading,
  setTestimonialsError
} from '../../store/actions';

const HomeContainer = () => {
  //Fetching Data
  const {
    data: testimonialsData,
    dataError: testimonialsError,
    loading: testimonialsLoading
  } = useCharityAPI('/what-they-say');

  const {
    data: numbersData,
    dataError: numbersError,
    loading: numbersLoading
  } = useCharityAPI('/speaking-numbers');

  /*------------------
  Dispatching Actions
  --------------------*/
  const dispatch = useDispatch();

  //Numbers Actions
  dispatch(setNumbersData(numbersData));
  dispatch(setNumbersLoading(numbersLoading));
  dispatch(setNumbersError(numbersError));

  //Testimonials Actions
  dispatch(setTestimonialsData(testimonialsData));
  dispatch(setTestimonialsLoading(testimonialsLoading));
  dispatch(setTestimonialsError(testimonialsError));

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
