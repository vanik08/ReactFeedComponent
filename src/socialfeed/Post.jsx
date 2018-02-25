import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';
import moment from 'moment';

import './Post.css';

const Post = ({ postDate, authorName, messageBody, profileImageUrl }) => {
  return (
    <div className="Post">
      <Paper className="paper">
        <div className="container">
          <div className="authorName">
            <Avatar src={profileImageUrl} />
            <span className="authorNameText">{authorName}</span>
          </div>
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
