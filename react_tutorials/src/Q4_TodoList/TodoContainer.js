import { useEffect, useRef, useState } from "react";
import TodoInputAndButton from "./TodoInputAndButton";
import TodoList from "./TodoList";

export default function TodoContainer()
{
    const [todo,setTodo]=useState({todo:''});
    const [todos,setTodos]=useState([]);
    const [bntLable,setBtnLable]=useState("Add");
    const [editIndex,setEditIndex]=useState(-1);
    const txt=useRef();//to use focus 
    //load data on DidMountEvent 
    useEffect(()=>{
        const arr=[{todo:'Design Form'},{todo:'Design Database'}]
        setTodos([...arr]);
    },[]);

    const onChange=(e)=>{
        setTodo({...todo,[e.target.name]:e.target.value});
    }
    const handleClick=(e)=>{
        if(bntLable==="Add")
        {
        setTodos([...todos,todo]);
        }
        else
        {
            const arr=[...todos];
            arr[editIndex]=todo;
            setTodos([...arr]);
            setEditIndex(-1);
            setBtnLable("Add");
            
        }
        setTodo({todo:''});
        txt.current.focus();
    }
    const delHandle=(e)=>
    {
        const arr=[...todos];
        arr.splice(e.target.value,1);
        setTodos([...arr]);
    }
    const handleEdit=(e)=>
    {
    
        const todoedit=todos[e.target.value];
        setTodo({todo:todoedit.todo});
        console.log(todo);
        setBtnLable("Update");
        setEditIndex(e.target.value);
        txt.current.focus();
    }
    return(<>
    <TodoInputAndButton value={todo} onChange={onChange} onClick={handleClick} bntLable={bntLable} txtref={txt}/>
    <TodoList todos={todos} delHandle={delHandle} handleEdit={handleEdit}/>
    </>)
}