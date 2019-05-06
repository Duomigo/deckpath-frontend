import React, { Component } from 'react'

import './App.scss'
import '../src/app/fonts/Font.scss'

import ToDoList from './app/components/ToDoList'

// Functional Component: function App()
// Class Component: class App extends Component

class App extends Component {
    state = {
        channels: ['To Do List', 'To Read List', 'To Watch List'],
        user: 'Huy',
        todos: ['Xin chao', 'Afghanimals'],
        selected: 0,
    }

    switchHeader = (channel, index) => {
        console.log(channel)
        this.setState({
            paths: channel,
            selected: index,
        })
    }

    handleChange = event => {
        event.preventDefault()
        this.setState({ value: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            todos: [...this.state.todos, this.state.value],
            value: '',
        })
    }

    render() {
        const { channels, paths, user, selected } = this.state

        return (
            <div className="app-layout">
                <div className="teams box">{user}</div>
                <div className="channels box">
                    <div className="channels-category">
                        <h3>Todo</h3>
                    </div>

                    {channels.map((channel, index) => {
                        var isSelected = selected === index ? ' selected' : ''
                        console.log(`${index} isSelected: ${isSelected}`)
                        return (
                            <button
                                key={index}
                                onClick={() =>
                                    this.switchHeader(channel, index)
                                }
                                className={'channels item ' + isSelected}
                            >
                                {channel}
                            </button>
                        )
                    })}
                </div>

                <div className="header box">{paths || user}</div>
                <div className="todos">
                    <ToDoList title="Today" />
                    <ToDoList title="Tomorrow" />
                    <ToDoList title="Tofuture" />
                </div>
            </div>
        )
    }
}

export default App
