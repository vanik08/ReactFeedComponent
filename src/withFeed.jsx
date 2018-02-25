import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

function withFeed(WrappedComponent) {
  return class extends Component {
    static propTypes = {
      interval: PropTypes.number,
    };

    static defaultProps = {
      interval: 2000,
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
      const { data } = await axios.get(
        'http://api.massrelevance.com/MassRelDemo/kindle.json',
      );

      console.log('fetched', data);
      this.setState({ posts: data });
    };

    render() {
      return <WrappedComponent posts={this.state.posts} />;
    }
  };
}

export default withFeed;
