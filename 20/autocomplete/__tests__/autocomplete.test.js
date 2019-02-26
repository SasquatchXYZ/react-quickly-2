// jest.dontMock('../src/build/autocomplete.js');
// jest.autoMockOff();

const rooms = [
  {"_id": "5622eb1f105807ceb6ad868b", "name": "node"},
  {"_id": "5622eb1f105807ceb6ad868c", "name": "react"},
  {"_id": "5622eb1f105807ceb6ad868d", "name": "backbone"},
  {"_id": "5622eb1f105807ceb6ad868e", "name": "angular"}
];

const TestUtils = require('react-dom/test-utils');
const React = require('react');
const ReactDOM = require('react-dom');
const Autocomplete = require('../src/autocomplete');
const fD = ReactDOM.findDOMNode;

const autocomplete = TestUtils.renderIntoDocument(
  React.createElement(Autocomplete, {
    options: rooms,
    url: 'test'
  })
);

const optionName = TestUtils.findRenderedDOMComponentWithClass(autocomplete, 'option-name');

describe('Autocomplete', () => {

  it('has four initial options', () => {
    let options = TestUtils.scryRenderedDOMComponentsWithClass(autocomplete, 'option-list-item');
    expect(options.length).toBe(4)
  });

  it('changes options based on the input', () => {
    expect(fD(optionName).value).toBe('');
    fD(optionName).value = 'r';
    TestUtils.Simulate.change(fD(optionName));
    expect(fD(optionName).value).toBe('r');
    let options = TestUtils.scryRenderedDOMComponentsWithClass(autocomplete, 'option-list-item');
    expect(options.length).toBe(1);
    expect(fD(options[0]).textContent).toBe('#react')
  });

  it('offers to save option when there are no matches', () => {
    fD(optionName).value = 'ember';
    TestUtils.Simulate.change(fD(optionName));
    let options = TestUtils.scryRenderedDOMComponentsWithClass(autocomplete, 'option-list-item');
    expect(options.length).toBe(0);
    let optionAdd = TestUtils.findRenderedDOMComponentWithClass(autocomplete, 'option-add');
    expect(fD(optionAdd).textContent).toBe('Add #ember')
  })

});