/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

// Import stuff
import React, { Component } from 'react';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Appbar from 'material-ui/AppBar';
import {deepOrange500} from 'material-ui/styles/colors';
import * as mui from 'material-ui';


// setting up material color
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class App extends Component {
 
  render() {
    return(
    <MuiThemeProvider muiTheme={muiTheme}>
      <div className="wrapper">
        { this.props.children }
      </div>
      </MuiThemeProvider>
    )
  }
}

export default App;

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
