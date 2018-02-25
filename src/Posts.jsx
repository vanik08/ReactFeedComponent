import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Posts extends Component {
  render() {
    return (
      <div className="Posts">
        posts!!!!<RaisedButton label="Hi" onClick={console.log} />
      </div>
    );
  }
}

export default Posts;
