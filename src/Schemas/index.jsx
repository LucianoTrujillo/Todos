import {normalize, schema} from 'normalizr';

export const normalizeTodos = (data) => {

  const todo = new schema.Entity('todos', {}, {processStrategy: (value, parent, key)  => ({...value, todoType: parent.id})});
  const type = new schema.Entity('todoType',{
    todos: [ todo ]
  }); 

  const typeList = {types: [ type ]};

  const result = normalize(data, typeList); 

  return result;
}

