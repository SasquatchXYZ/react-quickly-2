const React = require('react');
const ReactDOM = require('react-dom');

const Header = require('../components/header');
const Footer = require('../components/footer');
const MessageBoard = require('../components/board');

ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<Footer/>, document.getElementById('footer'));
ReactDOM.render(<MessageBoard messages={messages}/>, document.getElementById('message-board'));