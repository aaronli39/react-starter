import React from "react";

const Hello = () => {
    // jsx

    return (
        <div className="dummyClass">
            <h1>Hello Aaron</h1>
        </div>
    );

    // pure JS
    // return React.createElement(
    //     "div", 
    //     {id: "hello", className: "dummyClass"}, 
    //     React.createElement("h1", null, "Hello Aaron")
    // );
}

export default Hello;