import React from 'react';
import Header from '../template/commom/header';
import Body from '../template/body/body';
import Home from '../template/body/home';
import Record from '../template/body/record';
import Profile from '../template/profile/profile';
import Information from '../template/profile/informationList';

const App = () => (
  <div>
    <Header name="User"/>
    <Body>
      <Profile user = "Usuario Inicial"/>
      <Information/>
    </Body>
  </div>
);

export default App;
