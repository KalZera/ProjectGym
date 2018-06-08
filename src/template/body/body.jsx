import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  body: {
    marginTop: 70,
  },
});

class Body extends Component {
  render() {
    const {classes} = this.props;
    return(
      <div className={classes.body}>
        {this.props.children}
      </div>
    );
  }
}

export default withStyles(styles)(Body);