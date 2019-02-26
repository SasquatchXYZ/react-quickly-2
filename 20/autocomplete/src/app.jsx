const React = require('react');
const ReactDOM = require('react-dom');

const Autocomplete = require('./autocomplete');
const {rooms, url} = window.__autocomplete.data;

ReactDOM.render(<Autocomplete
    options={rooms}
    url={url}
  />,
  document.getElementById('autocomplete')
);