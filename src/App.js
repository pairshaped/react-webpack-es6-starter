import React, { Component } from 'react'

import MyView from 'views/MyView'

class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
    }
  }

  render () {
    return (
      <div>
        App Loaded.  This should probably be a router?
        <hr />
        <MyView />
      </div>
    )
  }

}

export default App
