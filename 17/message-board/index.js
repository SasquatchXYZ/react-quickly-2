require('babel-register')({
  presets: ['react']
});

const express = require('express');
const mongodb = require('mongodb');
const app = express();
const bodyParser = require('body-parser');
const validator = require('express-validator');
const logger = require('morgan');
const errorHandler = require('errorhandler');
const compression = require('compression');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/board';

const Header = React.createFactory(require('./components/header'));
const Footer = React.createFactory(require('./components/footer'));
const MessageBoard = React.createFactory(require('./components/board'));

mongodb.MongoClient.connect(MONGODB_URL, (err, db) => {
  if (err) {
    console.log(err);
    process.exit(1)
  }

  app.set('view engine', 'hbs');

  app.use(compression());
  app.use(logger('dev'));
  app.use(errorHandler());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(validator());
  app.use(express.static('public'));

  app.use((req, res, next) => {
    req.messages = db.collection('messages');
    return next()
  });

  app.get('/messages', (req, res, next) => {
    req.messages.find({}, {sort: {_id: -1}}).toArray((err, docs) => {
      if (err) return next(err);
      return res.json(docs)
    })
  });

  app.post('/messages', (req, res, next) => {
    console.log(req.body);
    req.checkBody('message', 'Invalid message in body').notEmpty();
    req.checkBody('name', 'Invalid name in body').notEmpty();

    let newMessage = {
      message: req.body.message,
      name: req.body.name
    };

    let errors = req.validationErrors();
    if (errors) return next(errors);
    req.messages.insert(newMessage, (err, result) => {
      if (err) return next(err);
      return res.json(result.ops[0])
    })
  });

  app.get('/', (req, res, next) => {
    req.messages.find({}, {sort: {_id: -1}}).toArray((err, docs) => {
      if (err) return next(err);
      res.render('index', {
        header: ReactDOMServer.renderToString(Header()),
        footer: ReactDOMServer.renderToString(Footer()),
        messageBoard: ReactDOMServer.renderToString(MessageBoard({messages: docs})),
        props: `<script type="text/javascript">const messages=${JSON.stringify(docs)}</script>`
      })
    })
  });

  app.listen(3000)
});