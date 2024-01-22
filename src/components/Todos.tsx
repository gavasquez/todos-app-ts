import { type TodoId, type ListOfTodo, type Todo as TodoType } from "../type.d";
import { Todo } from './Todo';

interface Props {
  todos: ListOfTodo,
  onRemoveTodo: ( { id }: TodoId ) => void,
  onToggleCompleteTodo: ( { id, completed }: Pick<TodoType, 'id' | 'completed'> ) => void,
}

export const Todos = ( { todos, onRemoveTodo, onToggleCompleteTodo }: Props ) => {
  return (
    <ul className="todo-list">
      {
        todos.map( todo => (
          <li
            key={ todo.id }
            className={ `${ todo.completed ? 'completed' : '' }` }>
            <Todo
              key={ todo.id }
              id={ todo.id }
              title={ todo.title }
              completed={ todo.completed }
              onRemoveTodo={ onRemoveTodo }
              onToggleCompleteTodo={ onToggleCompleteTodo }
            />
          </li>
        ) )
      }
    </ul >
  );
};
