import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Footer = ({ children, block, className, ...rest }) => {
  const modifiers = {
    'c-modal__footer--block': block
  };
  return (
    <footer className={classnames('c-modal__footer', className, modifiers)} {...rest}>
      {children}
    </footer>
  );
};
Footer.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  block: PropTypes.bool
};

export default Footer;
