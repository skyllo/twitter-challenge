import PropTypes from 'prop-types';
import React from 'react';
import Tweet from './Tweet';

import './Tweets.scss';

const Tweets = props => (
  <div className="tweets">
    {props.tweets.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Tweet className="tweets__tweet" key={index} tweet={item} />
    ))}
  </div>
);

Tweets.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Tweets;
