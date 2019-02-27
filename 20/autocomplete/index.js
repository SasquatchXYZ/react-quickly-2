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
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/autocomplete';

const Autocomplete = React.createFactory(require('./src/autocomplete.jsx'));
const PORT = process.env.PORT || 3000;

mongodb.MongoClient.connect(MONGODB_URL, function (err, db) {
  if (err) {
    console.error(err);
    process.exit(1)
  }

  app.use(compression());
  app.use(logger('dev'));
  app.use(errorHandler());
  app.use(bodyParser.json());
  app.use(validator());
  app.use(express.static('public'));
  app.engine('handlebars', exphbs());
  app.set('view engine', 'handlebars');

  app.use((req, res, next) => {
    req.rooms = db.collection('rooms');
    return next()
  });


  app.get('/rooms', (req, res, next) => {
    req.rooms.find({}, {sort: {_id: -1}}).toArray((err, docs) => {
      if (err) return next(err);
      return res.json(docs)
    })
  });

  app.post('/rooms', (req, res, next) => {
    req.checkBody('name', 'Invalid name in body').notEmpty();
    let errors = req.validationErrors();
    if (errors) return next(errors);
    req.rooms.insert(req.body, (err, result) => {
      if (err) return next(err);
      return res.json(result.ops[0])
    })
  });

  app.get('/', (req, res, next) => {
    let url = `http://localhost:${PORT}/rooms`;
    req.rooms.find({}, {sort: {_id: -1}}).toArray((err, rooms) => {
      if (err) return next(err);
      res.render('index', {
        autocomplete: ReactDOMServer.renderToString(Autocomplete({
          options: rooms,
          url: url
        })),
        data: `<script type="text/javascript">
                window.__autocomplete_data = {
                  rooms: ${JSON.stringify(rooms, null, 2)},
                  url: "${url}"
                }
                </script>`
      })
    })
  });

  app.listen(PORT)

});