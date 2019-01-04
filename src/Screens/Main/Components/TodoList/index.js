import React, { Component } from 'react';
import TodoContainer from '../Todo/Container';
import './style.css';

class TodoList extends Component {
  render() {
    return (
      <div>
         <ul>
          {this.props.todos.map(todoId => <TodoContainer key={todoId} id={todoId}/>)}
        </ul>
      </div>
    );
  }
}

export default TodoList;