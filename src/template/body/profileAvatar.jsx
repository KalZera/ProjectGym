import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

function ProfileAvatar(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar
        alt="Profile Default"
        src="../img/profile.jpg"
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
    </div>
  );
}

ProfileAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileAvatar);
