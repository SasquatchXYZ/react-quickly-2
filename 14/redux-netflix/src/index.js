const React = require('react');
const {render} = require('react-dom');
const {Provider} = require('react-redux');
const {createStore} = require('react-redux');
const reducers = require('./modules');
const routes = require('./routes');

modules.exports = render((
  <Provider store={createStore(reducers)}>
    {routes}
  </Provider>
), document.getElementById('app'));