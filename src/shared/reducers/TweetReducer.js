import { UPDATE_TWEETS } from '../actions/TweetActions';

export default function tweetReducer(state = [], action) {
  switch (action.type) {
    case UPDATE_TWEETS:
      return [...action.tweets];
    default:
      return state;
  }
}
