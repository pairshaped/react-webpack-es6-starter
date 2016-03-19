import React from 'react'

import MyComponent from 'components/MyComponent'

export default React.createClass({
  render: function () {
    return (
      <div>
        This is the app.
        <MyComponent />
      </div>
    )
  }
})
