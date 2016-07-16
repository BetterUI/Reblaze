import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Select = ({ children, className, width, style, ...rest }) => {
  const finalStyle = Object.assign({ width: `${width}px` }, style);

  return (
    <select className={classnames('c-choice', className)} style={finalStyle} {...rest}>
      {children}
    </select>
  );
};

Select.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  width: PropTypes.number,
  style: PropTypes.object
};

export default Select;
