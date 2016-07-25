import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Headings from './Headings';
import Heading from './Heading';
import Tab from './Tab';

const Tabs = ({ children, className, animate, primary, secondary, success, error, ...rest }) => {
  const modifiers = {
    'a-tabs': animate !== undefined,
    'a-tabs--slow': animate === 'slow',
    'a-tabs--fast': animate === 'fast',
    'c-tabs--primary': primary,
    'c-tabs--secondary': secondary,
    'c-tabs--success': success,
    'c-tabs--error': error
  };
  return (
    <div className={classnames('c-tabs', className, modifiers)} {...rest}>
      {children}
    </div>
  );
};


Tabs.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  animate: PropTypes.oneOf(['slow', 'fast'])
};

Tabs.Headings = Headings;
Tabs.Heading = Heading;
Tabs.Tab = Tab;

export default Tabs;

