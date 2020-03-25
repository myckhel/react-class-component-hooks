# react-class-component-hooks

> React Class Component Hooks

[![NPM](https://img.shields.io/npm/v/react-class-component-hooks.svg)](https://www.npmjs.com/package/react-class-component-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# UNDER DEVELOPMENT

## Install

```bash
npm install --save react-class-component-hooks
```

## Usage

```jsx
import React, { Component } from 'react'

import {UseEffect} from 'react-class-component-hooks'

class Example extends Component {
  state = {updateUsers: []}
  render () {
    return (
      <UseEffect watches={[this.props.users]} onUpdate={() => this.setState({updateUsers: this.props.users})} />
    )
  }
}
```

## License

MIT © [myckhel](https://github.com/myckhel)
