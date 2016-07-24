import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Alignment = ({ children, className, vertical, horizontal, height, style, ...rest }) => {
  const modifiers = {
    'u-center-block__content--vertical': vertical,
    'u-center-block__content--horizontal': horizontal
  };
  const finalStyle = { height: `${height}px`, ...style };
  return (
    <div className={classnames('u-center-block', className)} style={finalStyle} {...rest}>
      <div className={classnames('u-center-block__content', modifiers)}>
        {children}
      </div>
    </div>
  );
};

Alignment.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  vertical: PropTypes.bool,
  horizontal: PropTypes.bool,
  height: PropTypes.string
};

export default Alignment;
