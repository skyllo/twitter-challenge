import PropTypes from 'prop-types';
import React from 'react';
import TweetsContainer from '../containers/TweetsContainer';

const Root = ({ match }) => (
  <div>
    <h1>Tweets from @{ match.params.twitterName }</h1>
    <TweetsContainer />
  </div>
);

Root.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object
  }).isRequired
};

export default Root;
