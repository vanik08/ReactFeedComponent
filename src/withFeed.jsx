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
      this.fetchPosts();
      this.interval = window.setInterval(this.fetchPosts, this.props.interval);
    }

    componentWillUnmount() {
      window.clearInterval(this.interval);
    }

    fetchPosts = async () => {
      const { feedUrl, numPosts } = this.props;
      const { data } = await axios.get(`${feedUrl}?limit=${numPosts}`);

      console.log('fetched', data);
      this.setState({ posts: data });
    };

    render() {
      return <WrappedComponent posts={this.state.posts} />;
    }
  };
}

export default withFeed;
