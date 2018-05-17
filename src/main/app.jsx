import React from 'react';
import Material from 'materialize-css';
import Header from '../template/commom/header';
import Body from '../template/body/body';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider>
    <Header/>
    <Body/>
  </MuiThemeProvider>
);

export default App;
