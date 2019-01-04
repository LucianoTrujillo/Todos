import React, { Component } from 'react';
import './style.css';

class TextInput extends Component {
  render() {
    return (
      <div>
        <form className="form" action="">
       <input type="text" placeholder="Add todo..." onChange={(event) => this.props.textChange(event.target.value)} value={this.props.value}/>
       </form>
      </div>
    );
  }
}

export default TextInput;