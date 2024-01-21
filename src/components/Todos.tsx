interface Todo {
    id: string,
    title: string,
    complete: boolean
}

interface Props {
    todos: Todo[],
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
