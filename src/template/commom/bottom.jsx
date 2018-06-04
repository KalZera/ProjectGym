import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import Home from '@material-ui/icons/home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Body from '../body/body';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = {
  root: {
    width: 350,
    bottom: 0,
    position: 'fixed',
    margin: '0 auto'
  },
};

class Bottom extends Component {
  state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
          <BottomNavigationAction label="Favorites" to="/" value="favorites" icon={<FavoriteIcon />} />
          {/* <Link to="/about"><BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} /></Link> */}
        </BottomNavigation>
        
        <Router>

          {/* <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
            <BottomNavigationAction to="/" label="Home" value="recents" icon={<Home />} />
          </BottomNavigation> */}

          <Route exact path="/" component={Body} />
          <Route path="/about" component={Body} />
        </Router>
      </div>
    );
  }
}

Bottom.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bottom);