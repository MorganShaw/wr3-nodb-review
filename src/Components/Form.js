import React from 'react';



class Form extends React.Component {
    constructor(){
        super();
        this.state = {
            title: ""
        }
    }

    // universalHandler = (event) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }
    //This above will update more broadly. I don't get this. Need more help. You could use this if you had to update more than just the title (like for me - updating books author, title, mood, etc)

    titleHandler = (e) => {
      
        this.setState({
            title: e.target.value
        })
    }

    render(){
        return <div className="form-container">
            <form 
                onSubmit={e => {
                    this.props.addTodo(e, this.state.title)
                    this.setState({title:""})
                    }
                }>
                
                <input 
                    name="title"
                    value={this.state.title} 
                    type="text" 
                    placeholder="Add a new todo item..."
                    // onChange={(e) => this.universalHandler(e)}
                    onChange={(e) => this.titleHandler(e)}
                    />
                <button>Add Todo</button>
            </form>
        </div>
    }
}    

export default Form;