import React, {Component} from 'react';
import classNames from 'classnames';
import {Avatar} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import img from '../img/profile.jpg';

const styles = {
  row: {
    display: 'grid',
    justifyContent: 'center',
  },
  font:{
    fontSize: 20,
    fontFamily: 'Roboto',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 100,
    height: 100,
  },
};

class Profile extends Component{
  render(){
    const {classes, user} = this.props;
    return(
      <div className={classes.row}>
        <Avatar
          alt="Adelle Charles"
          src={img}
          className={classNames(classes.avatar, classes.bigAvatar)}
        />
        <div className={classes.row}>
          <label className={classes.font}>
            {user}
          </label>
        </div>
      </div>
    )
  };

};

export default withStyles (styles)(Profile);