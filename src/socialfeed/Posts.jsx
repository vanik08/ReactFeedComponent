import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Post from './Post';
import withFeed from './withFeed';
import './Posts.css';

class Posts extends Component {
  static propTypes = {
    containerTag: PropTypes.string,
    containerProps: PropTypes.object,
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        created_at: PropTypes.string,
        user: PropTypes.shape({
          name: PropTypes.string,
          profileImageUrl: PropTypes.string,
        }),
        text: PropTypes.string,
      }),
    ).isRequired,
  };

  static defaultProps = {
    containerTag: 'div',
    containerProps: {},
  };

  render() {
    return React.createElement(
      this.props.containerTag,
      this.props.containerProps,
      this.props.posts.map(post => (
        <Post
          key={post.id}
          postDate={post.created_at}
          authorName={post.user.name}
          messageBody={post.text}
          profileImageUrl={post.user.profile_image_url}
        />
      )),
    );
  }
}

export default withFeed(Posts);
