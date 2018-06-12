import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableHead, TableRow, Paper} from '@material-ui/core';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#3f51b5',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
    heigth: 250
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  td:{
    width:100
  }
});

class List extends Component {
  render() {
    const {classes} = this.props;
    return(
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell className={classes.td}> TESTE</CustomTableCell>
              <CustomTableCell className={classes.td} numeric> TESTE1</CustomTableCell>
              <CustomTableCell className={classes.td} numeric> TESTE2</CustomTableCell>
              <CustomTableCell className={classes.td} numeric> TESTE3</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={classes.Row}>
              <CustomTableCell className={classes.td} component="th" scope="row"> TESTE</CustomTableCell>
              <CustomTableCell className={classes.td} numeric> TESTE1</CustomTableCell>
              <CustomTableCell className={classes.td} numeric> TESTE2</CustomTableCell>
              <CustomTableCell className={classes.td} numeric> TESTE3</CustomTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    )
  }
  
}

export default withStyles(styles)(List);