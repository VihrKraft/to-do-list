import ToDoItem from './ToDoItem'


export default function ToDoList({ todos, toggleTodo, deleteTodo }) {
    return(
        <ul className="list">
            <ToDoItem todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        </ul>
    )
}