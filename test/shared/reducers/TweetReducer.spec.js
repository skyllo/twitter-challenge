import { UPDATE_TWEETS } from '../../../src/shared/actions/TweetActions';
import tweetReducer from '../../../src/shared/reducers/TweetReducer';

describe('TweetReducer', () => {
  it('should return the initial state', () => {
    expect(tweetReducer(undefined, {})).toEqual([]);
  });

  it('should handle UPDATE_TWEETS', () => {
    expect(tweetReducer(undefined, {
      type: UPDATE_TWEETS,
      tweets: ['one', 'two']
    })).toEqual(['one', 'two']);
  });
});
