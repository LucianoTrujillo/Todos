import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import todos from './Reducers/todos';
import {normalizeTodos} from './Schemas/index';

const API = {
  types: [
    { name: 'Easy', 
      id: 0,
      todos: [
      ]
    },
    { name: 'Medium', 
      id: 1,
      todos: [
        {text: "hola", id: 2031, done: false, todoType: 1}
      ]
    },
    { name: 'Hard', 
      id: 2,
      todos: [
        {text: "hoasda", id: 2032, done: false, todoType: 2}
      ]
    },
  ]
}
const normalizedData = normalizeTodos(API);

const initialState = {
  entities: normalizedData.entities,
  todoTypes: normalizedData.result.types,
}

const store = createStore(todos, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 
export default store;

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
