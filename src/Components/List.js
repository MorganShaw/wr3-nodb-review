import React from 'react';
import Task from './Task'

const List = (props) => {
    const todoMap = props.todos.map(todo => {
        return <Task key={todo.id} todo={todo}/>
    })
    return <div className="list-container">
        {todoMap}
    </div>
}

export default List;