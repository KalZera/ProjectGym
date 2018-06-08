import React from 'react';
import Header from '../template/commom/header';
import Body from '../template/body/body';
import Home from '../template/body/home';
import List from '../template/body/list';


const App = () => (
  <div>
    <Header name="User"/>
    <Body>
      <List/>

    </Body>

  </div>
);

export default App;
