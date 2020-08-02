import React from 'react';

const Task = (props) => {
    return <div className="todo-item">
        <h1 className="todo-title">{!props.todo.completed ? props.todo.title : "Completed!"}</h1>
        <div className="btn-container">
            <button 
                className="todo-btn" 
                onClick={() => props.deleteTodo(props.todo.id)}>X</button>
            <button 
                onClick={() => props.completeTodo(props.todo.id)}
                className="todo-btn">Complete</button>
        </div>
    </div>
}

export default Task;