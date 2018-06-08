import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableHead, TableRow, Paper} from '@material-ui/core';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.purple,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

class List extends Component {
  render() {
    const {classes} = this.props;
    return(
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell> TESTE</CustomTableCell>
              <CustomTableCell numeric> TESTE1</CustomTableCell>
              <CustomTableCell numeric> TESTE2</CustomTableCell>
              <CustomTableCell numeric> TESTE3</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={classes.Row}>
              <CustomTableCell component="th" scope="row"> TESTE</CustomTableCell>
              <CustomTableCell numeric> TESTE1</CustomTableCell>
              <CustomTableCell numeric> TESTE2</CustomTableCell>
              <CustomTableCell numeric> TESTE3</CustomTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    )
  }
  
}

export default withStyles(styles)(List);