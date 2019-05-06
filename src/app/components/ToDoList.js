import React, { Component } from 'react';

import './ToDoList.scss'

class ToDoList extends Component {
    render() {

        const { title } = this.props

        return (
            <div className="todo-list">
                {title}
            </div>
        )
    }
}

export default ToDoList