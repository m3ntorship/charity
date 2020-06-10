import React from 'react';
import  FeaturedBannerContainer  from './featuredBanner';
import { WorkStyleContainer } from './workStyle';
import { NumbersContainer } from './numbers';
import { CausesContainer } from './causes';
import { SponsersContainerConnect } from './sponsers';
import { WelcomeContainer } from './welcome';
import { NewsConatiner } from './news&articles';
import ActivitiesContainer from './activities';
import { ContactInfoContainer } from './contactInfo';
import { TestimonialsContainer } from './testimonials';
import { UpcomingEventsSectionContainer } from '../../components/UpcomingEvents';
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
import {
  setCausesData,
  setCausesLoading,
  setCausesError
} from '../../store/actions';
import {
  setWorkStyleData,
  setWorkStyleLoading,
  setWorkStyleError
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
import {
  setNewsAndArticlesData,
  setNewsAndArticlesLoading,
  setNewsAndArticlesError
} from '../../store/actions';
import {
  setWelcomeData,
  setWelcomeLoading,
  setWelcomeError
} from '../../store/actions';
import {
  setActivitiesData,
  setActivitiesLoading,
  setActivitiesError
} from '../../store/actions';
import {
  setFeaturedBannerData,
  setFeaturedBannerLoading,
  setFeaturedBannerError
} from '../../store/actions';
import {
  setHeaderCarouselData,
  setHeaderCarouselLoading,
  setHeaderCarouselError
} from '../../store/actions';
import {
  setSponsersData,
  setSponsersLoading,
  setSponsersError
} from '../../store/actions';
import {
  setUpcomingEventsDataActionCreator,
  setUpcomingEventsLoadingActionCreator,
  setUpcomingEventsErrorActionCreator
} from '../../store/actions';
const HomeContainer = () => {
  //Fetching Data
  const {
    data: testimonialsData,
    dataError: testimonialsError,
    loading: testimonialsLoading
  } = useCharityAPI('/what-they-say');
  const {
    data: newsAndArticlesData,
    dataError: newsAndArticlesError,
    loading: newsAndArticlesLoading
  } = useCharityAPI('/news-and-articles');

  const {
    data: sponsersData,
    dataError: sponsersError,
    loading: sponsersLoading
  } = useCharityAPI('/Sponsers');

  const {
    data: numbersData,
    dataError: numbersError,
    loading: numbersLoading
  } = useCharityAPI('/speaking-numbers');
  const {
    data: HeaderCarouselData,
    dataError: HeaderCarouselError,
    loading: HeaderCarouselLoading
  } = useCharityAPI('/main-carousels');

  const {
    data: upcommingEventsData,
    dataError: upcommingEventsError,
    loading: upcommingEventsLoading
  } = useCharityAPI('/upcoming-events');
  const {
    data: causesData,
    loading: causesLoading,
    dataError: causesError
  } = useCharityAPI('/popular-causes');
  const {
    data: workStyleData,
    dataError: workStyleError,
    loading: workStyleLoading
  } = useCharityAPI('/how-we-work');
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
    data: welcomeData,
    loading: welcomeLoading,
    dataError: welcomeError
  } = useCharityAPI('/welcome-section');

  const {
    data: activitiesData,
    dataError: activitiesError,
    loading: activitiesLoading
  } = useCharityAPI('/what-we-do');

  const {
    data: featuredBannerData,
    dataError: featuredBannerError,
    loading: featuredBannerLoading
  } = useCharityAPI('/featured-banner');

  /*------------------
  Dispatching Actions
  --------------------*/
  const dispatch = useDispatch();

  //Numbers Actions
  dispatch(setNumbersData(numbersData));
  dispatch(setNumbersLoading(numbersLoading));
  dispatch(setNumbersError(numbersError));

  //Sponsers Actions
  dispatch(setSponsersData(sponsersData));
  dispatch(setSponsersLoading(sponsersLoading));
  dispatch(setSponsersError(sponsersError));

  //Testimonials Actions
  dispatch(setTestimonialsData(testimonialsData));
  dispatch(setTestimonialsLoading(testimonialsLoading));
  dispatch(setTestimonialsError(testimonialsError));
  //HeaderCarousel Actions
  dispatch(setHeaderCarouselData(HeaderCarouselData));
  dispatch(setHeaderCarouselError(HeaderCarouselError));
  dispatch(setHeaderCarouselLoading(HeaderCarouselLoading));

  //NewsAndArticles Actions
  dispatch(setNewsAndArticlesData(newsAndArticlesData));
  dispatch(setNewsAndArticlesLoading(newsAndArticlesLoading));
  dispatch(setNewsAndArticlesError(newsAndArticlesError));

  //Upcoming events Actions
  dispatch(setUpcomingEventsDataActionCreator(upcommingEventsData));
  dispatch(setUpcomingEventsLoadingActionCreator(upcommingEventsLoading));
  dispatch(setUpcomingEventsErrorActionCreator(upcommingEventsError));
  //Causes Actions
  dispatch(setCausesData(causesData));
  dispatch(setCausesLoading(causesLoading));
  dispatch(setCausesError(causesError));

  //WorkStyle Actions
  dispatch(setWorkStyleData(workStyleData));
  dispatch(setWorkStyleLoading(workStyleLoading));
  dispatch(setWorkStyleError(workStyleError));

  //Contact Actions
  dispatch(setContactInfoData(contactData));
  dispatch(setContactInfoLoading(contactLoading));
  dispatch(setContactInfoError(contactError));

  //Social Actions
  dispatch(setSocialData(socialData));
  dispatch(setSocialLoading(socialLoading));
  dispatch(setSocialError(socialError));

  //Welcome Actions
  dispatch(setWelcomeData(welcomeData));
  dispatch(setWelcomeLoading(welcomeLoading));
  dispatch(setWelcomeError(welcomeError));

  // Activities Action
  dispatch(setActivitiesData(activitiesData));
  dispatch(setActivitiesLoading(activitiesLoading));
  dispatch(setActivitiesError(activitiesError));
  // FeaturedBanner Action
  dispatch(setFeaturedBannerData(featuredBannerData));
  dispatch(setFeaturedBannerLoading(featuredBannerLoading));
  dispatch(setFeaturedBannerError(featuredBannerError));

  return <Home />;
};

const Home = () => {
  return (
    <>
      <HeaderCarouselContainer />
      <WelcomeContainer />
      <ActivitiesContainer />
      <FeaturedBannerContainer />
      <CausesContainer />
      <NumbersContainer />
      <UpcomingEventsSectionContainer />
      <TestimonialsContainer />
      <WorkStyleContainer />
      <NewsConatiner />
      <SponsersContainerConnect />
      <ContactInfoContainer />
    </>
  );
};

export default HomeContainer;
