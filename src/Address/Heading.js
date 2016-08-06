import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Heading = ({ children, className, ...rest }) => {
  return (
    <span className={classnames('c-address__heading', className)} {...rest}>
      {children}
    </span>
  );
};

Heading.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default Heading;
