import React, { Component } from 'react';
import Tabs from 'src/Tabs';
import Button from 'src/Button';
import { Link } from 'react-router';

class TabsDemo extends Component {
  demo() {
    document.querySelector('.js-tab-one').classList.toggle('c-tab-heading--active');
    document.querySelector('.js-tab-two').classList.toggle('c-tab-heading--active');
  }
  render() {
    return (
      <div>
        <Button primary><Link to="/home">Home</Link></Button>
        <Tabs primary>
          <Tabs.Headings>
            <Tabs.Heading active> Tab 1 </Tabs.Heading>
            <Tabs.Heading> Tab 2 </Tabs.Heading>
          </Tabs.Headings>
          <Tabs.Tab active>This is tab one</Tabs.Tab>
          <Tabs.Tab>This is tab two</Tabs.Tab>
        </Tabs>
        <Tabs secondary animate="slow">
          <Tabs.Headings>
            <Tabs.Heading active className={'js-tab-one'}> Tab 1 </Tabs.Heading>
            <Tabs.Heading className={'js-tab-two'}> Tab 2 </Tabs.Heading>
          </Tabs.Headings>
          <Tabs.Tab active>This is tab one</Tabs.Tab>
          <Tabs.Tab>This is tab two</Tabs.Tab>
        </Tabs>
        <Button ghost secondary onClick={this.demo.bind(this)}>Animate</Button>
      </div>
    );
  }
}

export default TabsDemo;
