import React, { Component } from 'react'

import './App.scss'
import '../src/app/fonts/Font.scss'

// Functional Component: function App()
// Class Component: class App extends Component

class App extends Component {
    state = {
        channel1: 'Today',
        channel2: 'Tomorrow',
        channel3: 'This Week',
        channels: ['Today', 'Tomorrow', 'This Week'],
        user: 'Huy',
        todos: ['Xin chao', 'Afghanimals'],
        selected: 0
    }

    switchHeader = (channel, index) => {
        console.log(channel)
        this.setState({ 
            paths: channel,
            selected: index
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
        const { channels, paths, user, todos, selected } = this.state

        return (
            <div className="app-layout">
                <div className="teams box">{user}</div>
                <div className="channels box">
                    <div className="channels-category">
                        <h3>Todo</h3>
                    </div>

                    {channels.map((channel, index) => {
                        var isSelected = (selected === index) ? ' selected' : '';
                        console.log(`${index} isSelected: ${isSelected}`)
                        return (
                            <button
                                key={index}
                                onClick={() => this.switchHeader(channel, index)}
                                className={"channels item " + isSelected}
                            >
                                {channel}
                            </button>
                        )
                    })}
                </div>
                <div className="header box">{paths || user}</div>
                <div className="messages box">
                    <ul className="message-list">
                        {todos.map((todo, index) => {
                            return <li key={index}>{todo}</li>
                        })}
                    </ul>
                </div>
                <div className="input box">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            className="input-field"
                            type="text"
                            placeholder="What is your plan"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                        <input
                            className="input-submit"
                            type="submit"
                            value="Submit"
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default App
