import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Headings = ({ children, className, ...rest }) => {
  return (
    <div className={classnames('c-tabs__headings', className)} {...rest}>
      {children}
    </div>
  );
};


Headings.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default Headings;
