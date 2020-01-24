import React from 'react';

const Todos = ({todos, deleteTodo}) => {
  console.log(todos)

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <h6>Mission:</h6>
          <samp  onClick={()=> {deleteTodo(todo.id)}}>{todo.title}</samp>
          <h6>Mission Report:</h6>
          <code>{todo.content}</code>
        </div>
      )
    })
  ) : (
    <p className="center"> You have no missions registered </p>
  );
  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}
export default Todos