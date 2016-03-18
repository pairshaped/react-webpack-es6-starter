import React from 'react'

import MyComponent from 'components/MyComponent'

const App = React.createClass({
  render: function () {
    return (
      <div>
        This is the app.
        <MyComponent />
      </div>
    )
  }
})

export default App
