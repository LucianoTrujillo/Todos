import React, { Component } from 'react';
import '../styles.css';
import TextInput from '../../../Components/TextInput/index';
import TodoList from '../Components/TodoList/index';

//redux
import { connect } from 'react-redux';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [{text: 'create todos', done: false},{text: 'get rich', done: true}],
      filteredTodos: [],
      text: '',
    }
  }

  textChange = text => {
    this.setState({
      text,
      filteredTodos: this.state.todos.filter( todo => todo.text.includes(text))
    })
  }

  render() {
    return (
      <div className="container">
        <section className="panel">
          <section className="input">
              <TextInput textChange={this.textChange.bind(this)} value={this.state.text}/>
            </section>
          <section className="todoList">
            <TodoList todos={this.state.filteredTodos}/>
          </section>
        </section>
      </div>
    );
  }
}

export default connect()(Search);