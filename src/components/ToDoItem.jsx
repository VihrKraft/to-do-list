export default function ToDoItem({ todos, toggleTodo, deleteTodo }) {
    return(
        todos.map((todo) => (
            <li>
                <label htmlFor={todo.id} >
                    {todo.title}
                    <input 
                        id={todo.id}
                        type="checkbox" 
                        checked={todo.completed} 
                        onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                    />
                    <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
                </label>
            </li>
        ))
        
    )
}