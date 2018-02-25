import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Post from './Post';
import withFeed from './withFeed';
import './Posts.css';

class Posts extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        created_at: PropTypes.string,
        user: PropTypes.shape({
          name: PropTypes.string,
        }),
        text: PropTypes.string,
      }),
    ).isRequired,
  };

  render() {
    return (
      <div className="Posts">
        {this.props.posts.map(post => (
          <Post
            key={post.id}
            postDate={post.created_at}
            authorName={post.user.name}
            messageBody={post.text}
          />
        ))}
      </div>
    );
  }
}

export default withFeed(Posts);
