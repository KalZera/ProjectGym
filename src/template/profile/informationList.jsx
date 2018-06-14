import React, {Component} from 'react';
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
// import {DraftsIcon, InboxIcon} from '@material-ui/icons';
import {AccountBox, Phone, Email} from '@material-ui/icons';

const styles = theme =>({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class Information extends Component{
  render(){
    return(
      <div>
        <List component="nav">
          <ListItem>
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Usuario" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Phone />
            </ListItemIcon>
            <ListItemText primary="NUMBERS" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText primary="user@mail.com" />
          </ListItem>
        </List>
      </div>
    )
  };
};

export default withStyles(styles)(Information);