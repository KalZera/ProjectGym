import React from 'react';
import Material from 'materialize-css';
import Bottom from '../template/commom/bottom';
import Buttons from '../template/body/button';
import ProfileName from '../template/body/profileName';
import ProfileAvatar from '../template/body/profileAvatar';
// import Routes from './routes';

const App = () => (
  <div>
    <ProfileName user="Usuario 1"/>
    
    <Bottom/>
  </div>
);

export default App;
