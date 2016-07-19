import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Button = ({ children, className, ghost, primary, secondary, success, error, size, rounded, block, href, ...rest }) => {
  const modifiers = {
    ['c-button--primary']: !ghost && primary,
    ['c-button--secondary']: !ghost && secondary,
    ['c-button--success']: !ghost && success,
    ['c-button--error']: !ghost && error,
    ['c-button--ghost']: ghost,
    ['c-button--ghost-primary']: ghost && primary,
    ['c-button--ghost-secondary']: ghost && secondary,
    ['c-button--ghost-success']: ghost && success,
    ['c-button--ghost-error']: ghost && error,
    ['c-field--xsmall']: size === 'xsmall',
    ['c-field--small']: size === 'small',
    ['c-field--medium']: size === 'medium',
    ['c-field--large']: size === 'large',
    ['c-field--xlarge']: size === 'xlarge',
    ['c-field--super']: size === 'super',
    ['c-button--rounded']: rounded,
    ['c-button--block']: block
  };

  if (href !== undefined) {
    return (
      <a className={classnames('c-button', modifiers, className)} href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classnames('c-button', modifiers, className)} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  ghost: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'super']),
  rounded: PropTypes.bool,
  block: PropTypes.bool,
  href: PropTypes.string
};

export default Button;
