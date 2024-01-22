import { useState } from 'react';
import { Todos } from './components/Todos';
import { type TodoId, type Todo } from './type.d';

const mockTodos = [
  {
    id: '1',
    title: 'Ver el twitch de midu',
    completed: false
  },
  {
    id: '2',
    title: 'Aprender React con TypeScript',
    completed: false
  },
  {
    id: '3',
    title: 'Sacar ticket',
    completed: true
  }
];

export const App = () => {
  const [ todos, setTodos ] = useState( mockTodos );

  const handleRemove = ( { id }: TodoId ) => {
    const newTodos = todos.filter( todo => todo.id !== id );
    setTodos( newTodos );
  };

  const handleCompleted = ( { id, completed }: Pick<Todo, 'id' | 'completed'> ) => {
    const newTodo = todos.map( todo => {
      if ( todo.id === id ) {
        return {
          ...todo,
          completed
        };
      }
      return todo;
    } );
    setTodos( newTodo );
  };

  return (
    <div className="todoapp">
      <Todos
        onRemoveTodo={ handleRemove }
        onToggleCompleteTodo={ handleCompleted }
        todos={ todos }
      />
    </div>
  );
};
