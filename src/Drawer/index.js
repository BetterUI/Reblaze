import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Body from './Body';

const Drawer = ({ children, className, show, direction, ...rest }) => {
  const modifiers = {
    'c-drawer--visible': show,
    'c-drawer--top': direction === 'top',
    'c-drawer--right': direction === 'right',
    'c-drawer--bottom': direction === 'bottom',
    'c-drawer--left': direction === 'left'
  };

  return (
    <div>
      <div className="c-overlay"></div>
      <div className={classnames('c-drawer', modifiers, className)} {...rest}>
        {children}
      </div>
    </div>
  );
};

Drawer.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  show: PropTypes.bool,
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
};

Drawer.Body = Body;

export default Drawer;
