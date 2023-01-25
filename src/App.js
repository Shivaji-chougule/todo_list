import React,{useState} from "react";
import "./App.css";

export default function App() {
  const[todo,setTodo]=useState("")
  const[todos,setTodos]=useState([])
  const[editId,setEditId]=useState(0)

  function handleSubmit(e){
e.preventDefault()

if(editId){
  const editTodo=todos.find((i)=>i.id===editId)
  const updatedTodos=todos.map((t)=>
  t.id === editTodo.id
  ?(t={id:t.id,todo})
  :{id:t.id,todo:t.todo}
  )
  setTodos(updatedTodos)
  setEditId(0)
  setTodo("")
  return;
}

  if(todo !== ""){
    setTodos([{id:Math.floor(Math.random() *100)
      ,todo},...todos])}
setTodo("")
  }

    function handleDelete(id){
const deltodo=todos.filter((del)=>del.id !== id);
setTodos([...deltodo])
    }
    function handleEdit(id){
      const editodo=todos.find((edi)=>edi.id === id)
      setTodo([editodo.todo])
      setEditId(id)
    }
  return (
    <div>
  <div className="card">
    <h1>whats todays plan?</h1>
    <form onSubmit={handleSubmit}>
      <input className="glowing-border inputbox" value={todo} type="text" onChange={(e)=>{setTodo(e.target.value)}}/>
      <button className="submit_btn">{editId?"Sub Edit":"Submit"}</button>
    </form>
    <ul className="ul">
      {
        todos.map((t)=>(
          <li>
        <div className="todo_card">
        <span className="todo_text" key={t.id}>{t.todo}</span>
        <button className="edit_btn" onClick={()=>{handleEdit(t.id)}}>Edit</button>
        <button className="delete_btn" onClick={()=>{handleDelete(t.id)}}>Delete</button>
        </div>
      </li>
        ))
      }
      
    </ul>
  </div>
    </div>
  );
}
