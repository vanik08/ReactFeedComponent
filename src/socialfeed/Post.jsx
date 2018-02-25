import React from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import moment from 'moment';

import './Post.css';

const Post = ({ postDate, authorName, messageBody }) => {
  return (
    <div className="Post">
      <Paper className="paper">
        <div className="container">
          <div className="authorName">{authorName}</div>
          <div className="date">
            {moment(postDate).format('DD/MM/YYYY HH:MM')}
          </div>
        </div>
        <p className="body">{messageBody}</p>
      </Paper>
    </div>
  );
};

Post.propTypes = {
  postDate: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  messageBody: PropTypes.string.isRequired,
};

export default Post;
