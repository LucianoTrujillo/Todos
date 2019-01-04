import React, { Component } from 'react';
import './style.css';

class Button extends Component {
  render() {
    return (
      <button className="button" onClick={this.props.addTodo}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;