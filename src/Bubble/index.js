import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { getClassName } from '../utils/animate';

const Bubble = ({ children, className, animate, position, ...rest }) => {
  const modifiers = {
    'c-bubble--top': position === 'up',
    'c-bubble--right': position === 'right',
    'c-bubble--down': position === 'down',
    'c-bubble--left': position === 'left',
    'a-bubble': animate !== undefined
  };
  if (animate !== undefined) {
    const animateOptions = animate.split(' ');
    for (let i = 0; i < animateOptions.length; i++) {
      const classname = getClassName('a-bubble', animateOptions[i]);
      modifiers[classname] = true;
    }
  }
  return (
    <div className={classnames('c-bubble', modifiers, className)} {...rest}>
      {children}
    </div>
  );
};

Bubble.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  animate: PropTypes.string,
  position: PropTypes.oneOf(['up', 'right', 'down', 'left'])
};

export default Bubble;
