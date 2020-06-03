import React from "react"

// function Greet() {
//     return <h1>Hello Aaron</h1>;
// }

// ES6 syntax
const Greet = props => {
    const {name, occ} = props;
    return (
        <div>
            <h1>Hello {name}, who is a {occ}</h1>
            {props.children}
        </div>
    );
}

export default Greet;