import React from 'react';
import axios from 'axios';
import './reset.css';
import './App.css';
import Header from './Components/Header'
import List from './Components/List'
import Form from './Components/Form'


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: [],
    }
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
  }

  componentDidMount(){
    this.getTodos();
  };

  getTodos = () => {
    axios.get('/api/todos')
      .then(res => {
        this.setState({
          todos: res.data
        })
      }
    ).catch(err => console.log(err))
  };

  addTodo = (e, title) => {
    e.preventDefault()
    axios.post('/api/todos', {title})
    .then(res => {
      this.setState({
        todos: res.data
      })
    })
    .catch(err => console.log(err))
  };

  deleteTodo = (id) => {
    axios.delete(`/api/todos/${id}`)
    .then(res => {
      this.setState({
        todos: res.data
      })
    }).catch(err => console.log(err))
  };

  completeTodo = (id) => {
    axios.put(`/api/todos/complete/${id}`)
    .then(res => {
      this.setState({
        todos: res.data
      })
    }).catch(err => console.log(err))
  };
//We put the setstate method back to original value (to clear input field) not here on the addTodo method, but on the Form.js onSubmit arrow function, because the change needs to happen on the Form.js component.
  render () {
    console.log(this.state) 
    const completedTasks = this.state.todos.reduce((acc, cur) => {
      return (cur.completed ? acc + 1 : acc + 0)
    }, 0)
    console.log(completedTasks)
    return (
      <div>
        <Header completed={completedTasks}/>
        <Form addTodo={this.addTodo}/>
        <List completeTodo={this.completeTodo} deleteTodo={this.state.deleteTodo} todos={this.state.todos}/>
      </div>
    );

  }
}

export default App;
