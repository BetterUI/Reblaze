import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Content = ({ children, className, ...rest }) => (
  <div className={classnames('c-card__content', className)} {...rest}>
    {children}
  </div>
);

Content.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default Content;
