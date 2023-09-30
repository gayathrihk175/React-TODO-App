import React from 'react'

const TodoList = ({handleDelete,handleEdit,todos}) => {
  return (
    <ul className="all-todos">
        {todos.map((t)=> (
          <li className="single-todo" key={t.id} >
            <span className="todo-text">{t.todo}</span>
            <button onClick={() => handleEdit(t.id)} >Edit</button>
            <button onClick={()=> handleDelete(t.id)}>Delete</button>
          </li>
        ))}
    </ul>
  )
}

export default TodoList
