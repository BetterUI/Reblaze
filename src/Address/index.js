import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Heading from './Heading';

const Address = ({ children, className, ...rest }) => {
  return (
    <address className={classnames('c-address', className)} {...rest}>
      {children}
    </address>
  );
};

Address.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

Address.Heading = Heading;
export default Address;
