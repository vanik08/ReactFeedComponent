import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

function withFeed(WrappedComponent) {
  return class extends Component {
    static propTypes = {
      feedUrl: PropTypes.string.isRequired,
      interval: PropTypes.number,
      numPosts: PropTypes.number,
    };

    static defaultProps = {
      interval: 2000,
      numPosts: 20,
    };

    state = {
      posts: [],
    };

    componentDidMount() {
      const { numPosts } = this.props;

      if (numPosts < 1 || numPosts > 50) {
        console.error(
          'Invalid Prop numPosts. numPosts prop must be between 1 and 50',
        );
      } else {
        this.fetchPosts();
        this.interval = window.setInterval(
          this.fetchPosts,
          this.props.interval,
        );
      }
    }

    componentWillUnmount() {
      window.clearInterval(this.interval);
    }

    fetchPosts = async () => {
      const { feedUrl, numPosts } = this.props;
      const { data } = await axios.get(`${feedUrl}?limit=${numPosts}`);

      const combinedPosts = [...this.state.posts, ...data];
      const cutOff = combinedPosts.length - numPosts;
      const recentPosts = combinedPosts.slice(cutOff);

      this.setState({ posts: recentPosts });
    };

    render() {
      return <WrappedComponent posts={this.state.posts} />;
    }
  };
}

export default withFeed;
