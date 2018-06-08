import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: 150
  },
});

const treino = ['A','B','C','D','E'];

class Home extends Component {
  render() {
    const {classes} = this.props;
    return(
      <div className="btnFicha">
        { treino.map( (value,key) => (
          <Button variant="raised" key={key} color="primary" className={classes.button}>
            TREINO {value} 
          </Button>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(Home);