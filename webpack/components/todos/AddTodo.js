import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

class AddTodo extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(addTodo(this.refs.item.value));
    this.refs.item.value = '';
  }

  render() {
    return (
      <div className="center">
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <label>Add Item</label>
          <input ref="item" />
        </form>
      </div>
    )
  }
}

export default connect()(AddTodo);

