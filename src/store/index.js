import { createStore, combineReducers } from 'redux';
import { activitesReducer } from './reducers';
// const initialState = {
//   activites: {}
// };

const topReducer = combineReducers({
  activites: activitesReducer
});

const store = createStore(
  topReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
