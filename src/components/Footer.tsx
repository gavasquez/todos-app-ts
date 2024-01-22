export const Footer = ({activeCount, todos, onClearCompleted}) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{todos.length}</strong>
      </span>
      
    </footer>
  )
}