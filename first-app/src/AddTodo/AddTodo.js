import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    title: '',
    content:''
  }
  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value,
      content: this.state.content
    })
  }
  handleContentChange = (event) => {
    this.setState({
      title: this.state.title,
      content: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.title !== ''){
      this.props.AddTodo(this.state)
    }
    this.setState({title: '', content: ''})
  }
  handletitleSubmit = (event) => {
    event.preventDefault();
    console.log('lol')
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new mission:</label>
          <input type="text" onChange={this.handleTitleChange} value={this.state.title} />
        </form>
        <form onSubmit={this.handleSubmit}>
          <label>Mission Report:</label>
          <input type="text" onChange={this.handleContentChange} value={this.state.content}/>
          <button className="btn waves-effect waves-light" type="submit" name="action">Add Mission</button>
        </form>
      </div>
    )
  }
}

export default AddTodo