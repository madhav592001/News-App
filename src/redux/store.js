import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  AllSourcesReducer,
  ArticlesFromSourcesReducer,
  GetFavouritesReducer,
} from './newsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  AllSources: AllSourcesReducer,
  ArticleFromSources: ArticlesFromSourcesReducer,
  GetFavouites: GetFavouritesReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
