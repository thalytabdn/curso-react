import React, { Component } from 'react'

export default class Message extends Component {

    handleClick() {
        this.setState({
            message: 'Thanks for clicking :)'
        })
    }

    constructor(){
        super()
        this.state = {
            message: 'Welcome, You'
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.handleClick()}>Click Me</button>
            </div>
        )
    }
}
