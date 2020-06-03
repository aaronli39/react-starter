import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }
    
    // clickHandler() {
    //     this.setState({
    //         message: "goodbye!"
    //     })
    //     console.log(this);
    // }

    clickHandler2 = () => {
        this.setState({
            message: "goodbye"
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* using binding to handle events */}
                {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
                {/* using arrow functions to handle events  */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                {/* using binding in the constructor to handle events */}
                {/* <button onClick={this.clickHandler}>click</button> */}
                {/* use arrow function as a class property */}
                <button onClick={this.clickHandler2}>click</button>
            </div>
        )
    }
}

export default EventBind;
