

export default function TodoInputAndButton(props)
{
    
    return(<>
    <h1>ToDo List Two Part (InputButton-TodoList</h1>
    Todo<input type="text"  ref={props.txtref} name="todo" value={props.value.todo} onChange={props.onChange}/>
    <button onClick={props.onClick}>{props.bntLable}</button>
    </>)
}