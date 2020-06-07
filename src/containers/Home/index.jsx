import React from 'react';
import { WorkStyleContainer } from '../../components/WorkStyle';
import { FeaturedBannerContainer } from '../../components/FeaturedBanner';
import { NumbersContainer } from './numbers';
import { CausesContainer } from '../../components/Causes';
import { SponsersContainer } from '../../components/Sponsers';
import { ActivitiesContainer } from './activities';
import { Welcome } from '../../components/Welcome';
import { ContactInfoContainer } from './contactInfo';
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
  setContactInfoData,
  setContactInfoLoading,
  setContactInfoError
} from '../../store/actions';
import {
  setSocialData,
  setSocialLoading,
  setSocialError
} from '../../store/actions';

  setActivitiesData,
  setActivitiesLoading,
  setActivitiesError
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
    data: contactData,
    dataError: contactError,
    loading: contactLoading
  } = useCharityAPI('/main-contacts');

  const {
    data: socialData,
    dataError: socialError,
    loading: socialLoading
  } = useCharityAPI('/socialmedias');

   const {
     data: activitiesData,
     dataError: activitiesError,
     loading: activitiesLoading
   } = useCharityAPI('/what-we-do');


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

  //Contact Actions
  dispatch(setContactInfoData(contactData));
  dispatch(setContactInfoLoading(contactLoading));
  dispatch(setContactInfoError(contactError));

  //Social Actions
  dispatch(setSocialData(socialData));
  dispatch(setSocialLoading(socialLoading));
  dispatch(setSocialError(socialError));

  // Activities Action
  dispatch(setActivitiesData(activitiesData));
  dispatch(setActivitiesLoading(activitiesLoading));
  dispatch(setActivitiesError(activitiesError));

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
