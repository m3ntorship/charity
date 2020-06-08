import React from 'react';
import { FeaturedBannerContainer } from './featuredBanner';
import { WorkStyleContainer } from './workStyle';
import { NumbersContainer } from './numbers';
import { CausesContainer } from './causes';
import { SponsersContainer } from '../../components/Sponsers';
import { WelcomeContainer } from './welcome';
import { ActivitiesContainer } from './activities';
import { NewsConatiner } from './news&articles';
import { ContactInfoContainer } from './contactInfo';
import { TestimonialsContainer } from './testimonials';
import { UpcomingEventsSection } from '../../components/UpcomingEvents';
import { HeaderCarouselContainer } from './headercarousel';
import { useDispatch, connect } from 'react-redux';
import { useCharityAPI } from '../../clients';
import {
  // setNumbersData,
  // setNumbersLoading,
  // setNumbersError,
  // setTestimonialsData,
  // setTestimonialsLoading,
  // setTestimonialsError,
  // setCausesData,
  // setCausesLoading,
  // setCausesError,
  // setWorkStyleData,
  // setWorkStyleLoading,
  // setWorkStyleError,
  // setContactInfoData,
  // setContactInfoLoading,
  // setContactInfoError,
  // setSocialData,
  // setSocialLoading,
  // setSocialError,
  // setNewsAndArticlesData,
  // setNewsAndArticlesLoading,
  // setNewsAndArticlesError,
  // setWelcomeData,
  // setWelcomeLoading,
  // setWelcomeError,
  // setActivitiesData,
  // setActivitiesLoading,
  // setActivitiesError,
  // setFeaturedBannerData,
  // setFeaturedBannerLoading,
  // setFeaturedBannerError,
  // setHeaderCarouselData,
  // setHeaderCarouselLoading,
  // setHeaderCarouselError,
  setUpcomingEventsDataActionCreator,
  setUpcomingEventsLoadingActionCreator,
  setUpcomingEventsErrorActionCreator,
  setFeaturedCauseDataActionCreator,
  setFeaturedCauseLoadingActionCreator,
  setFeaturedCauseErrorActionCreator
} from '../../store/actions';

const HomeContainer = () => {
  // //Fetching Data
  // const {
  //   data: testimonialsData,
  //   dataError: testimonialsError,
  //   loading: testimonialsLoading
  // } = useCharityAPI('/what-they-say');
  // const {
  //   data: newsAndArticlesData,
  //   dataError: newsAndArticlesError,
  //   loading: newsAndArticlesLoading
  // } = useCharityAPI('/news-and-articles');

  // const {
  //   data: numbersData,
  //   dataError: numbersError,
  //   loading: numbersLoading
  // } = useCharityAPI('/speaking-numbers');
  // const {
  //   data: HeaderCarouselData,
  //   dataError: HeaderCarouselError,
  //   loading: HeaderCarouselLoading
  // } = useCharityAPI('/main-carousels');

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
  // const {
  //   data: causesData,
  //   loading: causesLoading,
  //   dataError: causesError
  // } = useCharityAPI('/popular-causes');
  // const {
  //   data: workStyleData,
  //   dataError: workStyleError,
  //   loading: workStyleLoading
  // } = useCharityAPI('/how-we-work');
  // const {
  //   data: contactData,
  //   dataError: contactError,
  //   loading: contactLoading
  // } = useCharityAPI('/main-contacts');

  // const {
  //   data: socialData,
  //   dataError: socialError,
  //   loading: socialLoading
  // } = useCharityAPI('/socialmedias');

  // const {
  //   data: welcomeData,
  //   loading: welcomeLoading,
  //   dataError: welcomeError
  // } = useCharityAPI('/welcome-section');

  // const {
  //   data: activitiesData,
  //   dataError: activitiesError,
  //   loading: activitiesLoading
  // } = useCharityAPI('/what-we-do');

  // const {
  //   data: featuredBannerData,
  //   dataError: featuredBannerError,
  //   loading: featuredBannerLoading
  // } = useCharityAPI('/featured-banner');

  /*------------------
  Dispatching Actions
  --------------------*/
  const dispatch = useDispatch();

  // //Numbers Actions
  // dispatch(setNumbersData(numbersData));
  // dispatch(setNumbersLoading(numbersLoading));
  // dispatch(setNumbersError(numbersError));

  // //Testimonials Actions
  // dispatch(setTestimonialsData(testimonialsData));
  // dispatch(setTestimonialsLoading(testimonialsLoading));
  // dispatch(setTestimonialsError(testimonialsError));
  // //HeaderCarousel Actions
  // dispatch(setHeaderCarouselData(HeaderCarouselData));
  // dispatch(setHeaderCarouselError(HeaderCarouselError));
  // dispatch(setHeaderCarouselLoading(HeaderCarouselLoading));

  // //NewsAndArticles Actions
  // dispatch(setNewsAndArticlesData(newsAndArticlesData));
  // dispatch(setNewsAndArticlesLoading(newsAndArticlesLoading));
  // dispatch(setNewsAndArticlesError(newsAndArticlesError));

  //Upcoming events Actions
  dispatch(setUpcomingEventsDataActionCreator(upcommingEventsData));
  dispatch(setUpcomingEventsLoadingActionCreator(upcommingEventsLoading));
  dispatch(setUpcomingEventsErrorActionCreator(upcommingEventsError));
  //Upcoming events Actions
  dispatch(setFeaturedCauseDataActionCreator(featuredCauseData));
  dispatch(setFeaturedCauseLoadingActionCreator(featuredCauseLoading));
  dispatch(setFeaturedCauseErrorActionCreator(featuredCauseError));
  // //Causes Actions
  // dispatch(setCausesData(causesData));
  // dispatch(setCausesLoading(causesLoading));
  // dispatch(setCausesError(causesError));

  // //WorkStyle Actions
  // dispatch(setWorkStyleData(workStyleData));
  // dispatch(setWorkStyleLoading(workStyleLoading));
  // dispatch(setWorkStyleError(workStyleError));

  // //Contact Actions
  // dispatch(setContactInfoData(contactData));
  // dispatch(setContactInfoLoading(contactLoading));
  // dispatch(setContactInfoError(contactError));

  // //Social Actions
  // dispatch(setSocialData(socialData));
  // dispatch(setSocialLoading(socialLoading));
  // dispatch(setSocialError(socialError));

  // //Welcome Actions
  // dispatch(setWelcomeData(welcomeData));
  // dispatch(setWelcomeLoading(welcomeLoading));
  // dispatch(setWelcomeError(welcomeError));

  // // Activities Action
  // dispatch(setActivitiesData(activitiesData));
  // dispatch(setActivitiesLoading(activitiesLoading));
  // dispatch(setActivitiesError(activitiesError));
  // // FeaturedBanner Action
  // dispatch(setFeaturedBannerData(featuredBannerData));
  // dispatch(setFeaturedBannerLoading(featuredBannerLoading));
  // dispatch(setFeaturedBannerError(featuredBannerError));
};

const Home = ({ 
  featuredCause,
  upcomingEvents 
}) => {
  return (
    <>
      {/* <HeaderCarouselContainer />
      <WelcomeContainer />
      <ActivitiesContainer />
      <FeaturedBannerContainer />
      <CausesContainer />
      <NumbersContainer /> */}
      <UpcomingEventsSection {...featuredCause} {...upcomingEvents}/>
      {/* <TestimonialsContainer />
      <WorkStyleContainer />
      <NewsConatiner />
      <SponsersContainer />
      <ContactInfoContainer /> */}
    </>
  );
};

const mapStateToProp = state => {
  return {
    featuredCause: {
      ...state.featuredCause
    },
    upcomingEvents: {
      cardData: state.upcomingEvents.data,
      cardLoading: state.upcomingEvents.loading,
      cardError: state.upcomingEvents.error
    }
  };
};

export default connect(mapStateToProp)(Home);

// newsAndArticles: newsAndArticlesReducer,
//   testimonials: testimonialsReducer,
//   numbers: numbersReducer,
//   headerCarousel: headerCarouselReducer,
//   upcomingEvents: upcomingEventsReducer,
//   featuredCause: featuredCauseReducer,
//   activities: activitiesReducer,
//   featuredBanner: featuredBannerReducer,
//   causes: causesReducer,
//   workStyle: workStyleReducer,
//   social: socialReducer,
//   contact: contactReducer,
//   welcome: welcomeReducer,
//   pages: pagesReducer,
//   articles: articlesReducer,
//   footer: footerReducer,
//   logo: logoReducer
// }
