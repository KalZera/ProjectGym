import React, {Component} from 'react';
import {AppBar, Toolbar, Typography, Menu, MenuItem, IconButton} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  btnLog: {
    marginLeft: -12,
    marginRight: 15,
  },
};

class Header extends Component {
  state = {
    auth: true,
    anchorEl: null,
  };
  // metodos de event click Menu
  handleClick = event =>{
    console.log('ok');
    this.handleClose();
  }
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };



  render(){
    const props = this.props;
    const {classes, name} = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    // const IconButtonProps = "aria-owns={{open ? 'menu-appbar' : null}} aria-haspopup='true'  onClick={this.handleMenu}  color='inherit'";
    return (
      <div>
        <AppBar>
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              {props.name}
            </Typography>
            <div className={classes.btnLog}>
              <IconButton aria-owns={open ? 'menu-appbar' : null} aria-haspopup='true'  onClick={this.handleMenu}  color='inherit' >
                <AccountCircle />
              </IconButton>
              <Menu id="menu-appbar" anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }} transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }} open={open}
                onClose={this.handleClose} >
                <MenuItem onClick={this.handleClick}>Log Out</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);