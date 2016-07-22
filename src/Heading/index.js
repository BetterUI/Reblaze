import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Heading = ({ children, className, size, ...rest }) => {
  switch (size) {
    case 'super':
      return (
        <h1 className={classnames('c-heading c-heading--super', className)} {...rest}>
          {children}
        </h1>
      );

    case 'xlarge':
      return (
        <h2 className={classnames('c-heading c-heading--xlarge', className)} {...rest}>
          {children}
        </h2>
      );

    case 'large':
      return (
        <h3 className={classnames('c-heading c-heading--large', className)} {...rest}>
          {children}
        </h3>
      );

    case 'medium':
    default:
      return (
        <h4 className={classnames('c-heading c-heading--medium', className)} {...rest}>
          {children}
        </h4>
      );

    case 'small':
      return (
        <h5 className={classnames('c-heading c-heading--small', className)} {...rest}>
          {children}
        </h5>
      );

    case 'xsmall':
      return (
        <h6 className={classnames('c-heading c-heading--xsmall', className)} {...rest}>
          {children}
        </h6>
      );
  }
};

Heading.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  size: PropTypes.oneOf(['super', 'xlarge', 'large', 'medium', 'small', 'xsmall'])
};

export default Heading;
