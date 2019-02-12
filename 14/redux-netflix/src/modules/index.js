const {combineReducers} = require('redux');
const {
  reducer: movies
} = require('./movies');

module.exports = combineReducers({
  movies
  // More reducers go here...
});