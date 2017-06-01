import PropTypes from 'prop-types';
import React from 'react';

import './Tweet.scss';

const Tweet = props => (
  // eslint-disable-next-line react/no-danger
  <div className={`tweet ${props.className}`} dangerouslySetInnerHTML={{ __html: props.tweet }} />
);

Tweet.propTypes = {
  tweet: PropTypes.string.isRequired,
  className: PropTypes.string
};

Tweet.defaultProps = {
  className: ''
};

export default Tweet;
