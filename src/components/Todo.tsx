import { TodoId, type Todo as TodoType } from '../type.d';

interface Props extends TodoType {
  onRemoveTodo: ( { id }: TodoId ) => void,
  onToggleCompleteTodo: ( { id, completed }: Pick<TodoType, 'id' | 'completed'> ) => void,
}


export const Todo = ( { id, title, completed, onRemoveTodo, onToggleCompleteTodo }: Props ) => {

  const handleChangeCheckBox = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    onToggleCompleteTodo( { id, completed: event.target.checked } );
  };

  return (
    <div className="view">
      <input
        className="toggle"
        checked={ completed }
        type="checkbox"
        onChange={ handleChangeCheckBox }
      />
      <label>{ title }</label>
      <button
        className='destroy'
        onClick={ () => onRemoveTodo( { id } ) }
      ></button>
    </div>
  );
};