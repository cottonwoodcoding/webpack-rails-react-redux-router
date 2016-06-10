import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    let todos = this.props.todos.map( todo => {
      return (<Todo key={todo.id} {...todo} />)
    })

    return (
      <div className="row">
       {todos}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { todos: state.items }
}

export default connect(mapStateToProps)(TodoList);

