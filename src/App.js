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
        user: 'Huy',
        todos: ['Xin chao', 'Afghanimals']
    }

    switchHeader = (channel) => {
        console.log(channel)
        this.setState({paths: channel})
    }

    render() {

        const { channel1, channel2, channel3, paths, user, todos } = this.state

        return (
            <div className="app-layout">
                <div className="teams box">{user}</div>
                <div className="channels box">
                    Decks
                    <button onClick={() => this.switchHeader(channel1)} className="channels item">
                        {channel1}
                    </button>
                    <button onClick={() => this.switchHeader(channel2)} className="channels item">
                        {channel2}
                    </button>
                    <button onClick={() => this.switchHeader(channel3)} className="channels item">
                        {channel3}
                    </button>
                </div>
                <div className="header box">{paths || user}</div>
                <div className="messages box">
                    <ul className="message-list">
                        {todos.map((todo, index) => {
                            return (
                                <li key={index}>
                                    {todo}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="input box">
                    <input type="text" placeholder="Personal Goals?" />
                </div>
            </div>
        )
    }
}

export default App
