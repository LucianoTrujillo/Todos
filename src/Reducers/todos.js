function todos(state, action){
  switch(action.type){
    case 'ADD_TODO':
    const todosLength = Math.random();
    const type = action.payload.type
      return {
        ...state, 
        entities: {...state.entities, 
                  todos: {...state.entities.todos, [todosLength]: {text: action.payload.todoText, done: false, id: todosLength, todoType: type}},
                  todoType: {...state.entities.todoType, [type]: { ...state.entities.todoType[type], todos: [...state.entities.todoType[type].todos, todosLength]}}
        }
      }
    case 'REMOVE_TODO':
      const newTodos = Object.assign({}, state.entities.todos)
      var newTodoTypes = Object.assign({}, state.entities.todoType)
      newTodoTypes = 
        {...state.entities.todoType,
          [ [newTodos[action.payload.id].todoType] ]: 
          {
            ...newTodoTypes[newTodos[action.payload.id].todoType],
              todos: newTodoTypes[newTodos[action.payload.id].todoType].todos.filter(id => id != action.payload.id) }
        } 
      delete newTodos[action.payload.id];
      return {
        ...state, 
        entities: {...state.entities, 
                  todos: newTodos,
                  todoType: newTodoTypes,
        }
      }
    case 'CHECK_TODO':
    return {
      ...state, 
      entities: {...state.entities, 
                todos: {...state.entities.todos, [action.payload.id]: {...state.entities.todos[action.payload.id], done: !state.entities.todos[action.payload.id].done }}
      }
    }
    default:
      return state 
  }
}

export default todos;