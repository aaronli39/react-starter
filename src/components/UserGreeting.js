import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        // USING TERNARY OPERATOR SHOULD BE MOST POPULAR METHOD
        return (
            this.state.isLoggedIn ? <div>Welcome Aaron</div> : <div>Welcome Guest</div>
        )

        // USING SHORT CIRCUIT
        // return (
        //     this.state.isLoggedIn && <div>Welcome Aaron</div>
        // )

        // USING VARIABLES
        // let msg
        // if (this.state.isLoggedIn) msg = <div>Welcome Aaron</div>
        // else msg = <div>Welcome Guest</div>

        // return <div>{msg}</div>

        // USING IF STATEMENTS
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>Welcome Aaron</div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }
    }
}

export default UserGreeting
