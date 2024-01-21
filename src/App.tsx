import { useState } from "react"
import { Todos } from "./components/Todos";

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    complete: false
  },
  {
    id: '2',
    title: 'todo 2',
    complete: false
  },
  {
    id: '3',
    title: 'todo 3',
    complete: true
  }
]


export const App = () => {

  const [todos] = useState(mockTodos);

  return (
    <Todos todos={todos} />
  )
}
