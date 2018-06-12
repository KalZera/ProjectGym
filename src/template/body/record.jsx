import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Links from './links';
import List from './list';

export default props => (
  <div>
    <Links/>
    <List/>
  </div>
);
