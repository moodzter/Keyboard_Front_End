import { React, useState } from 'react'
import { List } from 'reactstrap'
import data from "./ListData.JSON"

function List(props) {
    return (
        <ul>
            {data.map((item) => (
                <li key={item.id}>
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