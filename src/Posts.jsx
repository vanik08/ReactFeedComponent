import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import withFeed from './withFeed';

class Posts extends Component {
  render() {
    return (
      <div className="Posts">
        <RaisedButton label="Test" onClick={console.log} />
      </div>
    );
  }
}

export default withFeed(Posts);
