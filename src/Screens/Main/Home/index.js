import React, { Component } from 'react';
import InputContainer from './Components/InputContainer';
import TodoListContainer from '../Components/TodoList/Container';

import '../styles.css';

const Home = (props) => {
  return (
    <div className="container">
      <section className="panel">
        <section className="input">
          <InputContainer chooseType={props.chooseType}/>
        </section>
        <section className="todoList">
          <TodoListContainer/> 
        </section>
      </section>
    </div>
  );
}


export default Home;