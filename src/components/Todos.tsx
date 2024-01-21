import { type ListOfTodo } from "../type.d"

interface Props {
    todos: ListOfTodo,
}

export const Todos = ({ todos }: Props) => {
    return (
        <ul>
            {
                todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                    </li>
                ))
            }
        </ul>
    )
}
