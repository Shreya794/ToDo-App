import React from 'react'
import Todo from './Todo';

export default function Todos(props) {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className="container p-2 bg-light border" style={myStyle}>
        <h3 className='my-3'>Todos List</h3>
        {props.todos.length===0? "no todos to display":
        props.todos.map((todo)=>{
          return (
            <>
            <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr/>
            </>
          )  
        })
        }

    </div>
  )
}
