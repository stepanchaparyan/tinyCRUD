import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { booksReducer } from '../reducers/booksReducer';
import { loadingReducer } from '../reducers/loadingReducer';

const reducer = combineReducers({
  books: booksReducer,
  loading: loadingReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
