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
import Profile from '../body/Profile';
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
        <Router>
          <div>
            <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
              <Link to="/"><BottomNavigationAction label="Home" value="recents" icon={<Home />} /></Link>
              <Link to="/home"><BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} /></Link>
              <BottomNavigationAction label="Nearby" to="/" value="nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
            
            <Route exact path="/" component={Body} />
            <Route path="/home" component={Profile} />
          </div>
        </Router>
    );
  }
}

Bottom.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bottom);