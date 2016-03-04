import React from 'react'
import TestUtils from 'react-addons-test-utils'

const expect = require('chai').expect

const TestComponent = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Title</h1>
        <p>Content</p>
      </div>
    )
  }
})

describe ('Example BDD test for react component', function () {

  describe('Using a react class component', function () {
    var shallowRenderer = null,
        element = null

    before ('Creating jsDom instance to render into', function () {
      shallowRenderer = TestUtils.createRenderer()
      shallowRenderer.render(<TestComponent />)
      element = shallowRenderer.getRenderOutput()
    })

    describe('the rendered element', function () {
      it('should be a react element', function () {
        expect(TestUtils.isElement(element)).to.be.ok
      })
    })
  })

})

