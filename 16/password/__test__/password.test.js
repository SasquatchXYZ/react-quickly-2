describe('Password', () => {

  it('changes after clicking the Generate button', (done) => {

    const TestUtils = require('react-dom/test-utils');
    const {createRenderer} = require('react-test-renderer/shallow');
    const React = require('react');
    const ReactDOM = require('react-dom');
    const Password = require('../jsx/password');

    const PasswordGenerate = require('../jsx/password-generate');
    const PasswordInfo = require('../jsx/password-info');
    const PasswordInput = require('../jsx/password-input');
    const PaasswordVisibility = require('../jsx/password-visibility');

    const fD = ReactDOM.findDOMNode;

    let password = TestUtils.renderIntoDocument(<Password
        upperCase={true}
        lowerCase={true}
        special={true}
        number={true}
        over6={true}
      />
    );

    // Shallow Rendering: No Children

    const passwordRenderer = createRenderer();
    passwordRenderer.render(<Password/>);

    let p = passwordRenderer.getRenderOutput();
    expect(p.type).toBe('div');
    expect(p.props.children.length).toBe(6);

    // Normal Rendering

    let rules = TestUtils.scryRenderedDOMComponentsWithTag(password, 'li');
    expect(rules.length).toBe(5);
    expect(rules.length).toEqual(5);
    expect(fD(rules[0]).textContent).toEqual('Must have at least one upper-case character');
    expect(fD(rules[0]).textContent).toBe('Must have at least one upper-case character');

    let generateButton = TestUtils.findRenderedDOMComponentWithClass(password, 'btn generate-btn');
    expect(fD(rules[1]).firstChild.nodeName.toLowerCase()).toBe('#text');
    TestUtils.Simulate.click(fD(generateButton));
    expect(fD(rules[1]).firstChild.nodeName.toLowerCase()).toBe('strike');

    done()

  })
});