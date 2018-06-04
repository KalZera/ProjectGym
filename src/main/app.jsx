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
    {/* <Routes/> */}

    {/* <ProfileAvatar/>
    <Buttons name="Ficha A"/>
    <Buttons name="Ficha B"/>
    <Buttons name="Ficha C"/> */}
    {/* <Body/> */}
    <Bottom/>
  </div>
);

export default App;
