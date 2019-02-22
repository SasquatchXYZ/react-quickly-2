require('babel-register')({
  presets: ['react']
});

const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const validator = require('express-validator');
const logger = require('morgan');
const errorHandler = require('errorhandler');
const compression = require('compression');
const exphbs = require('express-handlebars');

const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const app = express();
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/react-quickly-autocomplete';

const Autocomplete = React.createFactory(require('./src/autocomplete')),
  PORT = process.env.PORT || 3000;