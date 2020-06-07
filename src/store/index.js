import { createStore, combineReducers } from 'redux';
import { numbersReducer } from './reducers/numbers';
import { testimonialsReducer } from './reducers/testimonials';
import { activitiesReducer } from './reducers/activities';
import { featuredBannerReducer } from './reducers/featuredBanner'


const CharityApp = combineReducers({
  testimonials: testimonialsReducer,
  numbers: numbersReducer,
  activities: activitiesReducer,
  featuredBanner: featuredBannerReducer
});

const store = createStore(
  CharityApp /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
