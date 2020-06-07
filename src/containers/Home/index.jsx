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
import { HeaderCarouselContainer } from '../../components/HeaderCarousel';
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

import {
  setUpcomingEventsDataActionCreator,
  setUpcomingEventsLoadingActionCreator,
  setUpcomingEventsErrorActionCreator
} from '../../store/actions';

import {
  setFeaturedCauseDataActionCreator,
  setFeaturedCauseLoadingActionCreator,
  setFeaturedCauseErrorActionCreator
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

  const {
    data: upcommingEventsData,
    dataError: upcommingEventsError,
    loading: upcommingEventsLoading
  } = useCharityAPI('/upcoming-events');
  const {
    data: featuredCauseData,
    dataError: featuredCauseError,
    loading: featuredCauseLoading
  } = useCharityAPI('/featured-cause');

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

  //Upcoming events Actionss
  dispatch(setUpcomingEventsDataActionCreator(upcommingEventsData));
  dispatch(setUpcomingEventsLoadingActionCreator(upcommingEventsLoading));
  dispatch(setUpcomingEventsErrorActionCreator(upcommingEventsError));
  //Upcoming events Actionss
  dispatch(setFeaturedCauseDataActionCreator(featuredCauseData));
  dispatch(setFeaturedCauseLoadingActionCreator(featuredCauseLoading));
  dispatch(setFeaturedCauseErrorActionCreator(featuredCauseError));

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
