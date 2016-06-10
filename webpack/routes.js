import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './containers/App';
import Todos from './components/todos/index';
import About from './components/About';
import NoMatch from './components/NoMatch';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Todos} />
      <Route path="about" component={About} />
    </Route>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)
