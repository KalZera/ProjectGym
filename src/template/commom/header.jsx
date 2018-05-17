import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

function handleClick() {
  alert('onClick triggered on the title component');
}

const Header = () => (
  <div>
  <AppBar
    title="Academia"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    onClick={handleClick}
  />
  </div>
);

export default Header;
