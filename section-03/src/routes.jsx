const React = require('react');

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const History = ReactRouter.browserHistory;

const Main = require('./components/main');
const Topic = require('./components/topic');
const ImageDetail = require('./components/image-detail');

module.exports = (
  <Router history={History}>
    <Route path="/" component={Main}>
      <Route path="topics/:id" component={Topic} />
      <Route path="images/:id" component={ImageDetail} />
    </Route>
  </Router>
);
