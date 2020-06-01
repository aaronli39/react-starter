import React from "react";

class Welcome extends React.Component {
    render() {
        return (
            <h1>
                Welcome {this.props.name}, who is {this.props.occ}
            </h1>
        );
    }
}

export default Welcome;