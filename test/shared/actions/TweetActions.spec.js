import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { UPDATE_TWEETS, updateTweets, updateTweetsAsync } from '../../../src/shared/actions/TweetActions';
import { mockHTTPResponse } from '../../MockUtils';

const mockStore = configureStore([thunk]);

describe('TweetActions #updateTweets()', () => {
  it('should return an UPDATE_TWEETS action with tweets inputted', () => {
    const action = updateTweets(['1', '2']);
    expect(action.type).toEqual(UPDATE_TWEETS);
    expect(action.tweets).toEqual(['1', '2']);
  });

  it('should return an UPDATE_TWEETS action with no tweets', () => {
    const action = updateTweets();
    expect(action.type).toEqual(UPDATE_TWEETS);
    expect(action.tweets).toEqual([]);
  });
});

describe('TweetActions #updateTweetsAsync', () => {
  afterEach(() => {
    window.fetch.mockRestore();
  });

  it('should create UPDATE_TWEETS action with tweets after fetching is done', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockHTTPResponse(200, null, '["one", "two"]'))
    );

    const expectedActions = [
      { type: UPDATE_TWEETS, tweets: ['one', 'two'] }
    ];
    const store = mockStore({ tweets: [] });

    return store.dispatch(updateTweetsAsync()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
