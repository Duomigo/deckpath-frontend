import React, { Component } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

import Column from './column'

import initialData from '../static/initial-data'

class ToDo extends Component {
    state = initialData

    onDragEnd = result => {

    }

    render() {
        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >
                {this.state.columnOrder.map(columnId => {
                    const column = this.state.columns[columnId]
                    const tasks = column.taskIds.map(
                        taskId => this.state.tasks[taskId]
                    )

                    return (
                        <Column key={column.id} column={column} tasks={tasks} />
                    )
                })}
                )
            </DragDropContext>
        )
    }
}

export default ToDo
