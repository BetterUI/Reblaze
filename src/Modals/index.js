import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { getClassName } from '../utils/animate';
import Overlays from '../Overlays';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Modals = ({ children, className, ghost, high, higher, highest, animate, ...rest }) => {
  const modifiers = {
    'a-modal': animate !== undefined,
    'c-modal--ghost': ghost,
    'c-modal--high': high,
    'c-modal--higher': higher,
    'c-modal--highest': highest
  };
  if (animate !== undefined) {
    const animateOptions = animate.split(' ');
    for (let i = 0; i < animateOptions.length; i++) {
      const classname = getClassName('a-modal', animateOptions[i]);
      modifiers[classname] = true;
    }
  }
  return (
    <div>
      <Overlays />
      <div className={classnames('c-modal', className, modifiers)} {...rest}>
        {children}
      </div>
    </div>
  );
};

Modals.Header = Header;
Modals.Body = Body;
Modals.Footer = Footer;

Modals.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  ghost: PropTypes.bool,
  high: PropTypes.bool,
  higher: PropTypes.bool,
  highest: PropTypes.bool,
  animate: PropTypes.string
};

export default Modals;
