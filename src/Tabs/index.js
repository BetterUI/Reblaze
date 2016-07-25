import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Headings from './Headings';
import Heading from './Heading';
import Tab from './Tab';

const Tabs = ({ children, className, ...rest }) => {
  return (
    <div className={classnames('c-tabs', className)} {...rest}>
      {children}
    </div>
  );
};


Tabs.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

Tabs.Headings = Headings;
Tabs.Heading = Heading;
Tabs.Tab = Tab;

export default Tabs;

