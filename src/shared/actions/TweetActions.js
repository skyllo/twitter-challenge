import 'whatwg-fetch';

export const UPDATE_TWEETS = 'UPDATE_TWEETS';

export function updateTweets(tweets = []) {
  return {
    type: UPDATE_TWEETS,
    tweets
  };
}

export function updateTweetsAsync(twitterName = 'cnnbrk') {
  return dispatch => window.fetch(`/api/tweets/${twitterName}`)
    .then(res => res.json())
    .then((json) => {
      const tweets = Object.keys(json).length ? json : ['Nothing to see here.'];
      dispatch(updateTweets(tweets));
    })
    .catch((e) => {
      const errorMessage = 'Error occurred whilst getting tweets.';
      dispatch(updateTweets([errorMessage]));
    });
}
