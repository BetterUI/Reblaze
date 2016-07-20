import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Bubble = ({ children, className, position, ...rest }) => {
  const modifiers = {
    'c-bubble--top': position === 'up',
    'c-bubble--right': position === 'right',
    'c-bubble--down': position === 'down',
    'c-bubble--left': position === 'left'
  };

  return (
    <div className={classnames('c-bubble', modifiers, className)} {...rest}>
      {children}
    </div>
  );
};

Bubble.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  position: PropTypes.oneOf(['up', 'right', 'down', 'left'])
};

export default Bubble;
