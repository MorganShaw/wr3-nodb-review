import React from 'react';

const Header = (props) => {
    return <header className="my-header">
        <h1 className="header-title">You have completed {props.completed} tasks</h1>

    </header>
}

export default Header