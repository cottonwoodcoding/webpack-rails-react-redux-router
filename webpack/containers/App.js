import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getTodos } from '../actions';

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(getTodos());
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">W-R-R</a>
            <ul id="nav-mobile" className="right">
              <li><Link to="/">Todos</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
        </nav>
        { this.props.children }
      </div>
    )
  }
}

export default connect()(App);

