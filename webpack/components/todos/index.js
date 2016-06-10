import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Todos = () => (
  <div className="container">
    <h3 className="center">Todos</h3>
    <AddTodo />
    <TodoList />
  </div>
)

export default Todos;

