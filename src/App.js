import React from 'react'
import logo from './logo.svg'
import './App.scss'

function App() {
    return (
        <div className="app-layout">
            <div className="teams box">Settings</div>
            <div className="channels box">
                Decks
                <li className="channels item">
                    Today
                </li>
                <li className="channels item">
                    Tomorrow
                </li>
                <li className="channels item">
                    Month
                </li>
            </div>
            <div className="header box">Paths</div>
            <div className="messages box">
                <ul className="message-list">
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                </ul>
            </div>
            <div className="input box">
                <input
                    type="text"
                    placeholder="Personal Goals?"
                />
            </div>
        </div>
    )
}

export default App
