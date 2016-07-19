import React, { PropTypes } from 'react';
import App from 'src/App';

const Layout = ({ children }) => (
  <App>
    {children}
  </App>
);


Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;
