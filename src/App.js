import "./App.css";

import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([]);
  const [edit,setEdit] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(todo !== ""){
      setTodos([...todos,{id: `${todo}-${Date.now()}` ,todo}])
      setTodo("")
    }

    if(edit){
      const editTodo = todos.find((i) => i.id === edit)
      const updatedTodos = todos.map((t) => t.id === editTodo.id ? (t = {id:t.id,todo}) : ({id:t.id,todo:t.todo}))
      setTodos(updatedTodos)
      setEdit(0)
      setTodo("")
      return;
    }
  }

  const handleDelete = (id) => {
    const deleteTodo = todos.filter((to) => (
      to.id !== id
    ))
    setTodos([...deleteTodo])
    setEdit(id);
  }

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => 
     i.id === id
    )
    setTodo(editTodo.todo)
    setEdit(id);
  }

  return (
    <div className="App">

     <div className="container">
        <h1>TODO List App</h1>

        {/* <form className="todo-form" onSubmit={handleSubmit}>
          <input type="text" onChange={(e)=>setTodo(e.target.value)} value={todo} />
          <button type="submit" >{edit ? "Edit" : "Add"}</button>
        </form> */}

        <TodoForm handleSubmit={handleSubmit} todo={todo} setTodo={setTodo} edit={edit} />


        {/* <ul className="all-todos">
        {todos.map((t)=> (
          <li className="single-todo" key={t.id} >
            <span className="todo-text">{t.todo}</span>
            <button onClick={() => handleEdit(t.id)} >Edit</button>
            <button onClick={()=> handleDelete(t.id)}>Delete</button>
          </li>
        ))}
        </ul> */}

        <TodoList handleDelete={handleDelete} handleEdit={handleEdit} todos={todos} />

     </div>
    </div>
  );
};

export default App;
