import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';

const mapping = {
  '#profile': <div>Profile (<a href="#">Home</a>)</div>,
  '#accounts': <div>Accounts (<a href="#">Home</a>)</div>,
  '*': <div>Dashboard<br/>
    <a href="#profile">Profile</a>
    <br/>
    <a href="#accounts">Acoounts</a>
  </div>,
};

ReactDOM.render(
  <Router mapping={mapping}/>,
  document.getElementById('content')
);