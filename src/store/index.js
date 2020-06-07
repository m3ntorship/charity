import { createStore, combineReducers } from 'redux';
import { numbersReducer } from './reducers/numbers';
import { testimonialsReducer } from './reducers/testimonials';
import {upcomingEventsReducer} from './reducers/upcomingEvents'
import {featuredCauseReducer} from './reducers/featuredCause'

const CharityApp = combineReducers({
  testimonials: testimonialsReducer,
  numbers: numbersReducer,
  upcomingEvents: upcomingEventsReducer,
  featuredCause: featuredCauseReducer
});

const store = createStore(
  CharityApp /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
