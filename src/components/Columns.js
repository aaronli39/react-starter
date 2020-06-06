import React from 'react'

function Columns() {
    const items = []
    return (
        <>
            {/* Using id as keys in React fragments to distinguish blocks of elements */}
            {/* {
                items.map(item => (
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            } */}

            <td>Name</td>
            <td>Aaron</td>
        </>
    )
}

export default Columns
