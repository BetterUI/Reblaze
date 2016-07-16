import React, { PropTypes } from 'react';
import classnames from 'classnames';
import styles from './style.scss';

const App = ({ children, className, ...rest }) => (
  <div className={classnames(styles.app, className)} {...rest}>
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default App;
