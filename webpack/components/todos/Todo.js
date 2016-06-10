import React from 'react';
import { connect } from 'react-redux';
import { updateTodo, deleteTodo } from '../../actions';

const Todo = ({ id, complete, name, dispatch }) => (
  <div className="col s12">
    <div className="col m8">
      <div style={ complete ? { textDecoration: 'line-through' } : {}} className="center">
        {name}
      </div>
    </div>
    <div className="col m2">
      <input
        id={`item-${id}`}
        type="checkbox"
        defaultChecked={complete}
        onChange={() => dispatch(updateTodo(id))}
      />
      <label htmlFor={`item-${id}`}>Complete?</label>
    </div>
    <div style={{ cursor: 'poiter' }} className="col m1" onClick={() => dispatch(deleteTodo(id))}>
      X
    </div>
  </div>
)

export default connect()(Todo);

