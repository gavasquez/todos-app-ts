import { FilterValue, ListOfTodo } from '../type';
import { Filters } from './Filters';

interface Props {
  activeCount: number,
  completedCount: number,
  onClearCompleted: () => void,
  filterSelected: FilterValue,
  handleFilterChange: ( filter: FilterValue ) => void,
}


export const Footer = (
  { activeCount = 0,
    completedCount = 0,
    onClearCompleted,
    filterSelected,
    handleFilterChange
  }: Props ) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{ activeCount }</strong> tareas Pendientes
      </span>
      <Filters
        filterSelected={ filterSelected }
        onFilterChange={ handleFilterChange }
      />
      {
        completedCount > 0 && (
          <button
            className='clear-completed'
            onClick={ onClearCompleted }
          >
            Borrar Completados
          </button>
        )
      }
    </footer>
  );
};