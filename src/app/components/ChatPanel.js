import React, { Component } from 'react'
import '../../App.scss'

class ChatPanel extends Component {

    state = {
        todos: ['Xin chao', 'Afghanimals'],
        value: ''
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

        const { todos } = this.state

        return (
            <div>
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

export default ChatPanel
