import React from "react";
import Person from "./Person"

function List() {
    const names = ["Bruce", "Clark", "Diana"];
    // const persons = [
    //     {
    //         id: 1,
    //         name: "Bruce",
    //         age: 30,
    //         skill: "React"
    //     },
    //     {
    //         id: 2,
    //         name: "Clark",
    //         age: 25,
    //         skill: "Angular"
    //     },
    //     {
    //         id: 3,
    //         name: "Diana",
    //         age: 38,
    //         skill: "Vue"
    //     }
    // ]

    // names list
    const nameL = names.map((name, index) => <h2 key={index}>{name}, {index}</h2>)

    // persons list
    // const personsL = persons.map(person => <Person key={person.id} person={person} /> )

    return (
        <div>
            {/* {personsL} */}
            {nameL}

            {/* <h2>{names[0]}</h2>        
            <h2>{names[1]} </h2>
            <h2>{names[2]} </h2> */}
        </div>
    )
}

export default List;
