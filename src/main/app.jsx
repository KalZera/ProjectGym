import React from 'react';
import Header from '../template/commom/header';
import Body from '../template/body/body';
import Home from '../template/body/home';
import Record from '../template/body/record';


const App = () => (
  <div>
    <Header name="User"/>
    <Body>
      <Home/>
    </Body>
  </div>
);

export default App;
