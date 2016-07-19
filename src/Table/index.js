import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Body from './Body';
import Head from './Head';
import Row from './Row';
import Cell from './Cell';
import Header from './Header';

const Table = ({ children, striped, className, ...rest }) => (
  <table className={classnames('c-table', { 'c-table--striped': striped }, className)} {...rest}>
    {children}
  </table>
);

Table.propTypes = {
  children: PropTypes.any,
  striped: PropTypes.bool,
  className: PropTypes.string
};

Table.Body = Body;
Table.Head = Head;
Table.Row = Row;
Table.Cell = Cell;
Table.Header = Header;

export default Table;
