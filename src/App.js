import React,{useState} from "react";
import "./App.css";

export default function App() {
  const[todo,setTodo]=useState("")
  const[todos,setTodos]=useState([])

  function handleSubmit(e){
e.preventDefault()
console.log(todo)
  if(todo !== ""){
    setTodos([{id:`${todo}-${Date.now()}`,todo},...todos])
  }
setTodo("")
  }
    function handleDelete(id){
const deltodo=todos.filter((del)=>del.id !== id);
setTodos([...deltodo])
    }
  return (
    <div>
  <div className="card">
    <h1>whats todays plan?</h1>
    <form onSubmit={handleSubmit}>
      <input className="glowing-border inputbox" value={todo} type="text" onChange={(e)=>{setTodo(e.target.value)}}/>
      <button className="submit_btn">submit</button>
    </form>
    <ul className="ul">
      {
        todos.map((t)=>(
          <li>
        <div className="todo_card">
        <span className="todo_text" key={t.id}>{t.todo}</span>
        <button className="edit_btn">edit</button>
        <button className="delete_btn" onClick={()=>{handleDelete(t.id)}}>delete</button>
        </div>
      </li>
        ))
      }
      
    </ul>
  </div>
    </div>
  );
}
