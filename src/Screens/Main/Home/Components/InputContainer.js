import React, { Component } from 'react';
import Button from '../../../../Components/Button';
import TextInput from '../../../../Components/TextInput/index';
import '../../styles.css';
//redux
import { connect } from 'react-redux';

class InputContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
    }
  }

  textChange = text => {
    this.setState({
      text
    })
  }

  chooseType = () => {
    this.props.chooseType(this.state.text);
    this.setState({
      text: '',
    })
  }

  render() {
    return (
      <section className="input">
        <TextInput textChange={this.textChange.bind(this)} value={this.state.text}/>
        <Button addTodo={this.chooseType.bind(this)} text="Add"/>
      </section>
    );
  }
}

export default connect()(InputContainer);