import React from 'react';
import './style.css';

function Modal(props){
  return(
    <div className="modal">
    
    <button onClick={props.handleCancel} className="cancel">X</button>
      <h2>How hard is it?</h2>
      <div className="types">
        <button className="easy" onClick={ () => props.addTodo(0)} >Easy</button>
        <button className="medium" onClick={ () => props.addTodo(1)}>Medium</button>
        <button className="hard" onClick={ () => props.addTodo(2)}>Hard</button>
      </div>
    </div>
  )
}

export default Modal;