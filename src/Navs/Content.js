import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Content = ({ children, className, ...rest }) => {
  return (
    <li className={classnames('c-nav__content', className)} {...rest}>
      {children}
    </li>
  );
};

Content.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default Content;
