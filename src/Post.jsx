import React from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';

const Post = ({ postDate, authorName, messageBody }) => {
  return (
    <Paper>
      <p>{postDate}</p>
      <p>{authorName}</p>
      <p>{messageBody}</p>
    </Paper>
  );
};

Post.propTypes = {
  postDate: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  messageBody: PropTypes.string.isRequired,
};

export default Post;
