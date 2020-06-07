import { createStore, combineReducers } from 'redux';
import { numbersReducer } from './reducers/numbers';
import { testimonialsReducer } from './reducers/testimonials';
import { welcomeReducer } from './reducers/welcome';
import { activitiesReducer } from './reducers/activities';



const CharityApp = combineReducers({
  testimonials: testimonialsReducer,
  numbers: numbersReducer,
  welcome: welcomeReducer,
  activities: activitiesReducer
});

const store = createStore(
  CharityApp /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
