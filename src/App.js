import React from 'react';
import axios from 'axios';
import './App.css';
import './reset.css';
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
  }
//We put the setstate method back to original value (to clearn input field) not here on the addTodo method, but on the Form.js onSubmit arrow function, is because the change needs to happen on the Form.js component.
  render () {
    console.log(this.state)
    return (
      <div>
        <Header/>
        <Form addTodo={this.addTodo}/>
        <List todos={this.state.todos}/>
      </div>
    );

  }
}

export default App;
