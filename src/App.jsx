import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Posts from './Posts';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Posts />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
