import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Header = ({ children, className, flex, style, ...rest }) => {
  const finalStyle = Object.assign({ flex }, style);

  return (
    <th className={classnames('c-table__cell', className)} style={finalStyle} {...rest}>
      {children}
    </th>
  );
};

Header.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  flex: PropTypes.number,
  style: PropTypes.object
};

export default Header;
