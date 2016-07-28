import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Head = ({ children, className, ...rest }) => (
  <header className="c-modal__header">
    <button type="button" className="c-button c-button--close">×</button>
    <h3 className={classnames('c-modal__header', className)} {...rest}>{children}</h3>
  </header>
);

Head.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default Head;
