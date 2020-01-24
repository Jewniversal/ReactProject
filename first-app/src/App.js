import React, { Component } from 'react';
import Todos from './Todos/Todos'
import AddTodo from './AddTodo/AddTodo'

class App extends Component{
  state = {
    todos: []
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    })
    this.setState({todos})
    }
  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({todos})
  }
  render() {
    return (
      <div className="todo=app container">
        <h1 className="center blue-text">Allmighty Chunts Missions </h1>
        <AddTodo AddTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    )
  }
}

export default App;
