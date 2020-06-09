import { createStore, combineReducers } from 'redux';
import { numbersReducer } from './reducers/numbers';
import { testimonialsReducer } from './reducers/testimonials';
import { headerCarouselReducer } from './reducers/headercarousel';
import { upcomingEventsReducer } from './reducers/upcomingEvents';
import { featuredCauseReducer } from './reducers/featuredCause';
import { causesReducer } from './reducers/causes';
import { workStyleReducer } from './reducers/workStyle';
import { contactReducer } from './reducers/contact';
import { socialReducer } from './reducers/social';
import { welcomeReducer } from './reducers/welcome';
import { activitiesReducer } from './reducers/activities';
import { featuredBannerReducer } from './reducers/featuredBanner';
import { footerReducer } from './reducers/footer';
import { pagesReducer } from './reducers/pages';
import { articlesReducer } from './reducers/articles';
import { logoReducer } from './reducers/logo';
import { sponsersReducer } from './reducers/sponsers';

const CharityApp = combineReducers({
  testimonials: testimonialsReducer,
  numbers: numbersReducer,
  headerCarousel: headerCarouselReducer,
  upcomingEvents: upcomingEventsReducer,
  featuredCause: featuredCauseReducer,
  activities: activitiesReducer,
  featuredBanner: featuredBannerReducer,
  causes: causesReducer,
  workStyle: workStyleReducer,
  social: socialReducer,
  contact: contactReducer,
  welcome: welcomeReducer,
  pages: pagesReducer,
  articles: articlesReducer,
  footer: footerReducer,
  logo: logoReducer,
  sponsers: sponsersReducer
});

const store = createStore(
  CharityApp /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
