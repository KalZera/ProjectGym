import React from 'react';
import Material from 'materialize-css';
import Bottom from '../template/commom/bottom';
import ProfileName from '../template/body/profileName';
import ProfileAvatar from '../template/body/profileAvatar';
import Routes from './routes';
import { CSSTransition, Transition } from 'react-transition-group';

const App = () => (
  <div>
    {/* <Transition></Transition> */}
      <ProfileName/>
      <ProfileAvatar/>
    <Bottom/>
  </div>
);

export default App;
