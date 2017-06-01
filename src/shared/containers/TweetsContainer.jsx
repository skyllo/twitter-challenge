import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Tweets from '../components/Tweets';
import { updateTweetsAsync } from '../actions/TweetActions';

class TweetsContainer extends React.Component {
  componentWillMount() {
    const twitterName = this.props.match.params.twitterName;
    this.props.updateTweets(twitterName);
  }

  render() {
    return (
      <Tweets tweets={this.props.tweets} />
    );
  }
}

TweetsContainer.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateTweets: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.object
  }).isRequired
};

TweetsContainer.defaultProps = {
  tweets: []
};

const mapStateToProps = state => ({
  tweets: state.tweets
});

const mapDispatchToProps = dispatch => ({
  updateTweets: twitterName => dispatch(updateTweetsAsync(twitterName))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetsContainer));
