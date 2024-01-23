import { useState } from 'react';
import { TodoTitle } from '../type.d';

interface Props {
  saveTodo: ( { title }: TodoTitle ) => void,
}

export const CreateTodo = ( { saveTodo }: Props ) => {

  const [ inputValue, setInputValue ] = useState( '' );

  const handleSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    saveTodo( { title: inputValue } );
    setInputValue( '' );
  };

  const onChangeInput = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    setInputValue( event.target.value );
  };

  return (
    <form onSubmit={ handleSubmit }>
      <input
        className='new-todo'
        value={ inputValue }
        placeholder='Nuevo Todo'
        onChange={ onChangeInput }
        autoFocus
      />
    </form>
  );
};