import { createStore, combineReducers } from 'redux';
import { numbersReducer } from './reducers/numbers';
import { testimonialsReducer } from './reducers/testimonials';
import { workStyleReducer } from './reducers/workStyle';

const CharityApp = combineReducers({
  testimonials: testimonialsReducer,
  numbers: numbersReducer,
  workStyle: workStyleReducer
});

const store = createStore(
  CharityApp /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
