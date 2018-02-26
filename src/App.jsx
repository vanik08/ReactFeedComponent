import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Posts from './socialfeed/Posts';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Posts
            feedUrl="http://api.massrelevance.com/MassRelDemo/kindle.json"
            interval={1000}
            numPosts={20}
            containerTag="div"
            containerProps={{ className: 'Posts' }}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
