import { React, useState } from 'react'
import data from "./ListData.json"



function List(props) {

    const filteredData = data.filter((L) => {
        
        if (props.input === '') {
            return L;
        }
        else {
            return L.text?.toLowerCase().includes(props.input);
            // return L.input?.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <li className="justify-content-center nav nav-masthead" key={item.id}>
                <br/>
                Name: {item.brand}
                <br/>
                Switch Type: {item.switches}
                <br/>
                Keycaps: {item.keycaps}
                <br/>
                Stabilizers: {item.stabilizers}
                <br/>
                Layout: {item.size}
                <br/>
                Price:{item.price}
                <br/>
                </li>
                
                
            ))}
        </ul>
    )
}


export default List;