import React from 'react'

import MyView from 'views/MyView'

const App = React.createClass({
  render: function () {
    return (
      <div>
        App Loaded.  This should probably be a router?
        <hr />
        <MyView />
      </div>
    )
  }
})

export default App
