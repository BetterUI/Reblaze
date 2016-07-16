import React, { PropTypes } from 'react';
import classnames from 'classnames';
import styles from './style.scss';

const Inline = ({ children, className, ...rest }) => (
  <div className={classnames(styles.inline, className)} {...rest}>
    {children}
  </div>
);

Inline.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default Inline;
