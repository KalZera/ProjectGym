import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Button, Grid} from '@material-ui/core';
import {KeyboardArrowLeft} from '@material-ui/icons';


const styles = theme => ({
  root: {
    width: '100%',
    height: 70
  },
  button: {
    margin: '10px auto'
  },
  ficha:{
    margin: '10px auto',
    float: 'right',
    color: '#000',
    fontWeight:600
    
  }
});

class List extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
          <Button href="#home" color="primary" variant="raised" className={classes.button}>
            <KeyboardArrowLeft/> Home
          </Button>
          <Button color="primary" className={classes.ficha}>
            Ficha A
          </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
  
}

export default withStyles(styles)(List);