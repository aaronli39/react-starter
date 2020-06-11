import React, { Component } from 'react'

class ClickCounterTwo extends Component {
    render() {
        const {count, handleIncrement} = this.props
        return (
            <div>
                <button onClick={handleIncrement}>Clicked {count} times</button>
            </div>
        )
    }
}

export default ClickCounterTwo
