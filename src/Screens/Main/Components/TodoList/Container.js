import React, { Component } from 'react';
import './style.css';
import TodoList from './index';

//redux
import { connect } from 'react-redux';

class TodoListContainer extends Component {

  render() {
    return (
      <div className="listsContainer">
        <div className="easyList">
          <h3>Easy</h3>
        <TodoList {...this.props.todoTypes[0]}/>
        </div>
        <div className="mediumList">
        <h3>Medium</h3>
        <TodoList {...this.props.todoTypes[1]}/>
        </div>
        <div className="hardList">
        <h3>Hard</h3>
        <TodoList {...this.props.todoTypes[2]}/>
        </div>
        </div>
    );
  }
}

function mapStateToProps(state, props){
  const types = state.todoTypes.map(listId => state.entities.todoType[listId]);
  return {
    todoTypes: types
  }
}

export default connect(mapStateToProps)(TodoListContainer);