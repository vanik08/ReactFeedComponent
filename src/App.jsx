import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Posts from './Posts';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Posts
            feedUrl="http://api.massrelevance.com/MassRelDemo/kindle.json"
            interval={1000}
            numPosts={5}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
