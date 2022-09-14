import { React, useState } from 'react'
import data from "./ListData.JSON"

function List(props) {
    const filteredData = data.filter((L) => {
        if (props.input === '') {
            return L;
        }
        else {
            return L.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <li hidden key={item.id}>
                    <li>{item.brand}</li>
                    <li>{item.switches}</li>
                    <li>{item.keycaps}</li>
                    <li>{item.stabilizers}</li>
                    <li>{item.price}</li>
                    <li>{item.size}</li>
                    </li>
            ))}
        </ul>
    )
}


export default List;