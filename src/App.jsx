import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Posts from './Posts';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Posts interval={3000} />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
