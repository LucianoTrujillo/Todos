import React, { Component } from 'react';
import './style.css';
import Todo from './index';

//redux
import { connect } from 'react-redux';

class TodoContainer extends Component {

  render() {
    return (
      <>
        <Todo {...this.props.data}/>
      </>
    );
  }
}

function mapStateToProps(state, props){
  const data = state.entities.todos[props.id]
  console.log(data)
  return {
    data
  }
}

export default connect(mapStateToProps)(TodoContainer);