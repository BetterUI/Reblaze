import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Cell = ({ children, className, flex, style, ...rest }) => {
  const finalStyle = Object.assign({ flex }, style);

  return (
    <td className={classnames('c-table__cell', className)} style={finalStyle} {...rest}>
      {children}
    </td>
  );
};

Cell.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  flex: PropTypes.number,
  style: PropTypes.object
};

export default Cell;
