export default function TodoList(props)
{
    return(<>
    <h3>Todo List</h3>
    <ul type="1">
        {props.todos.map((todo,index)=><li key={index}>{todo.todo}
        <button onClick={props.delHandle} value={index}>Delete</button>
        <button onClick={props.handleEdit} value={index}>Edit</button>
        </li>)}
    </ul>
    </>)
}