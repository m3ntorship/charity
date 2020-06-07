import { createStore, combineReducers } from 'redux';
import { numbersReducer } from './reducers/numbers';
import { testimonialsReducer } from './reducers/testimonials';

import { workStyleReducer } from './reducers/workStyle';
import { contactReducer } from './reducers/contact';
import { socialReducer } from './reducers/social';
import { welcomeReducer } from './reducers/welcome';
import { activitiesReducer } from './reducers/activities';
import { articlesReducer } from './reducers/articles';

const CharityApp = combineReducers({
  testimonials: testimonialsReducer,
  numbers: numbersReducer,
  workStyle: workStyleReducer,
  social: socialReducer,
  contact: contactReducer,
  welcome: welcomeReducer,
  activities: activitiesReducer,
  articles: articlesReducer
});

const store = createStore(
  CharityApp /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
