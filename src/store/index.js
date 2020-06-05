import { createStore } from 'redux';

export const ACTION_TYPES = {
  ADD_HOME_DATA: 'ADD_HOME_DATA'
};

const initialState = {
  pages: {
    home: {},
    articles: {}
  }
};

const CharityApp = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.ADD_HOME_DATA:
      const newHome = { ...state.pages.home, ...payload };
      const newPages = { ...state.pages, home: newHome };
      const newState = { ...state, pages: newPages };
      return newState;
    default:
      return state;
  }
};

const store = createStore(
  CharityApp /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
