// Turning off automocking is necessary for older versions of Jest.
// jest.dontMock('react');
// jest.dontMock('react-dom');

describe('HelloWorld', () => {
  const TestUtils = require('react-dom/test-utils');
  const React = require('react');

  it('has props', (done) => {

    class HelloWorld extends React.Component {
      render() {
        return <div>{this.props.children}</div>
      }
    }

    let hello = TestUtils.renderIntoDocument(<HelloWorld>Hello Node!</HelloWorld>);
    expect(hello.props).toBeDefined();
    console.log('my hello props:', hello.props);

    done()
  })
});