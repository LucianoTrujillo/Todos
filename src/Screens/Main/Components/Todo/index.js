import React, { Component } from 'react';
import './style.css';
//redux
import { connect } from 'react-redux';

class Todo extends Component {
  
  done = () => {
    this.props.dispatch({
      type: 'CHECK_TODO',
      payload: {
        id: this.props.id
      }
    })
  }

  remove = () => {
    this.props.dispatch({
      type: 'REMOVE_TODO',
      payload: {
        id: this.props.id
      }
    })
  }
  
  render() {
    return (
        <div className="todoContainer" >
        <li className={this.props.done ? 'done' : null } onClick={this.done}>{this.props.text}</li>
        <img src="https://cdn2.iconfinder.com/data/icons/round-interface-1/217/50-512.png" width="30px" onClick={this.remove} alt="asd"/>
        </div>
    );
  }
}

export default connect()(Todo);