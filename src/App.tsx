import { useState } from 'react';
import { Todos } from './components/Todos';
import { type TodoId, type Todo, FilterValue, TodoTitle } from './type.d';
import { TODO_FILTERS } from './consts';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

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

  const [ filterSelected, setFilterSelected ] = useState<FilterValue>( TODO_FILTERS.ALL );

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

  const handleFilterChange = ( filter: FilterValue ) => {
    setFilterSelected( filter );
  };

  const handleRemoveAllCompleted = () => {
    const filteredTodos = todos.filter( todo => !todo.completed );
    setTodos( filteredTodos );
  };

  const handleAddTodo = ( { title }: TodoTitle ) => {

    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    };

    setTodos( [
      ...todos,
      newTodo
    ] );
  };


  const activeCount = todos.filter( todo => !todo.completed ).length;
  const completedCount = todos.length - activeCount;

  const filterTodos = todos.filter( todo => {
    if ( filterSelected === TODO_FILTERS.ACTIVE ) return !todo.completed;
    if ( filterSelected === TODO_FILTERS.COMPLETED ) return todo.completed;
    return todo;
  } );

  return (
    <div className="todoapp">
      <Header onAddTodo={ handleAddTodo } />
      <Todos
        onRemoveTodo={ handleRemove }
        onToggleCompleteTodo={ handleCompleted }
        todos={ filterTodos }
      />
      <Footer
        filterSelected={ filterSelected }
        handleFilterChange={ handleFilterChange }
        activeCount={ activeCount }
        onClearCompleted={ handleRemoveAllCompleted }
        completedCount={ completedCount }
      />
    </div>
  );
};
