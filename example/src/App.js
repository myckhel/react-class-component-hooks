import React, { Component } from 'react'

import {UseEffect} from 'react-class-component-hooks'

class App extends Component {
  state = {updateUsers: []}
  render () {
    console.log(this.state);
    return (
      <div>
        <UseEffect watches={[this.props.users]} onUpdate={() => this.setState({updateUsers: this.props.users})} />
      </div>
    )
  }
}

App.defaultProps = {
  users: [1, 3, 2, 4]
}

export default App
