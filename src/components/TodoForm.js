import React from 'react'

const TodoForm = ({handleSubmit,todo,setTodo,edit}) => {
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
          <input type="text" onChange={(e)=>setTodo(e.target.value)} value={todo} />
          <button type="submit" >{edit ? "Edit" : "Add"}</button>
    </form>
  )
}

export default TodoForm
