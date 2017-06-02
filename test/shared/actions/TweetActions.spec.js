import { UPDATE_TWEETS, updateTweets } from '../../../src/shared/actions/TweetActions';

describe('TweetActions', () => {
  it('should return an action with tweets inputted', () => {
    const action = updateTweets(['1', '2']);
    expect(action.type).toEqual(UPDATE_TWEETS);
    expect(action.tweets).toEqual(['1', '2']);
  });

  it('should return an action with no tweets', () => {
    const action = updateTweets();
    expect(action.type).toEqual(UPDATE_TWEETS);
    expect(action.tweets).toEqual([]);
  });
});
