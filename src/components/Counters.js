import React, { Component } from 'react'

class Counters extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    handleIncrement = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }

    render() {
        return (
            <div>
                {this.props.children(this.state.count, this.handleIncrement)}
            </div>
        )
    }
}

export default Counters
