import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Alignment = ({ children, className, vertical, horizontal, height, ...rest }) => {
  const modifiers = {
    'u-center-block__content--vertical': vertical,
    'u-center-block__content--horizontal': horizontal
  };

  const heightInfo = {
    height: `${height}px`
  };

  return (
    <div className={classnames('u-center-block', className)} {...rest} style={heightInfo}>
      <div className={classnames('u-center-block__content', modifiers)}>
        {children}
      </div>
    </div>
  );
};

Alignment.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  vertical: PropTypes.bool,
  horizontal: PropTypes.bool,
  height: PropTypes.num
};

export default Alignment;
