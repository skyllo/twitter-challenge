import { combineReducers } from 'redux';

import TweetReducer from './TweetReducer';

const rootReducer = combineReducers({
  tweets: TweetReducer
});

export default rootReducer;
