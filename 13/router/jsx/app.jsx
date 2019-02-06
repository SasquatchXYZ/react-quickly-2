const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const History = require('history');

const Content = require('./content');
const About = require('./about');
const Contact = require('./contact');
const Login = require('./login');
const Post = require('./post');
const Posts = require('./posts');
const {withRouter} = require('react-router');

const posts = require('../posts');

let {Router, Route, Link} = ReactRouter;

let hashHistory = ReactRouter.useRouterHistory(History.createHashHistory)({
  queryKey: false
});

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Content}>
      <Route path="/about" component={About}/>
      <Route path="/posts" component={Posts} posts={posts}/>
      <Route path="/posts/:id" component={Post} posts={posts}/>
      <Route path="/contact" component={withRouter(Contact)}/>
    </Route>
    <Route path="/login" component={Login}/>
  </Router>
), document.getElementById('content'));