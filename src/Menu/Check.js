import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Check = ({ children, className, divider, disabled, ...rest }) => {
  const modifiers = {
    'c-menu__item--divider': divider,
    'c-choice--disabled': disabled
  };

  return (
    <label className={classnames('c-menu__item c-choice', modifiers, className)}>
      <input type="checkbox" disabled={disabled} {...rest} /> {children}
    </label>
  );
};

Check.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  divider: PropTypes.bool,
  disabled: PropTypes.bool
};

export default Check;
