import React, { Component } from 'react';

//import Landing from './Screens/Auth/Landing/index.js';
//import Login from './Screens/Auth/Login/index.js';
//import SingUp from './Screens/Auth/SignUp/index.js';
import Home from './Screens/Main/Home/index.js';
//import Search from './Screens/Main/Search/index.js';
import ModalContainer from './Modals/ModalContainer';
import ModalComponent from './Modals/ModalComponent';

//redux
import { connect } from 'react-redux';


class App extends Component {

  state = {
    modalVisible: false,
    newTodoText: '',
  }

  handleOpen = () => {
    this.setState({
      modalVisible: true
    })
  }

  handleCancel = () => {
    this.setState({
      modalVisible: false
    })
  }

  addTodo = (typeId) => {
    this.props.dispatch({
      type: 'ADD_TODO',
      payload: {
        todoText: this.state.newTodoText,
        type: typeId
      }
    }) 
    this.handleCancel();
  }

  chooseType = (text) => {
    this.setState({
      newTodoText: text
    })
    this.handleOpen();
  }

  render() {
    return (
      <>
      <Home chooseType={this.chooseType}/>
      {
        this.state.modalVisible &&
        <ModalContainer>
          <ModalComponent handleCancel={this.handleCancel} addTodo={this.addTodo}>
          </ModalComponent>
        </ModalContainer>
      }
      </>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    data: state,
  }
}
export default connect(mapStateToProps)(App);

