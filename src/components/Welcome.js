import React from "react";

class Welcome extends React.Component {
    render() {
        // destructuring props
        const {name, occ} = this.props;
        // destructuring state syntax
        // const {state1, state2} = this.state;

        return (
            <h1>
                Welcome {name}, who is a {occ}
            </h1>
        );
    }
}

export default Welcome;