import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '2.1',
    category: 'Tabs',
    title: 'Tabs',
    description: 'Enter a description',
    code: `
    Enter text
    `
  }

  constructor(props) {
    super(props)

    this.state = {
      activeTab: props.activeTab || 1
    }
  }

  handleTabSelect = (selectTab, event) => {
    debugger
    event.preventDefault()
    this.setState({ activeTab: selectTab })
  }

  render () {
    return (
      <Tabs defaultActiveKey={this.state.activeTab} id="uncontrolled-tab-example" onSelect={this.handleTabSelect} href="halo">
        <Tab href="abc" eventKey={1} title="Tab 1">Tab 1 content</Tab>
        <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
        <Tab eventKey={3} title="Tab 3">Tab 3 content</Tab>
      </Tabs>
    )
  }
}
