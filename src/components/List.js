import { React, useState } from 'react'
import data from "./ListData.JSON"



function List(props) {

    const filteredData = data.filter((L) => {
        if (props.input === '') {
            return ;
        }
        else {
            return (
                L.price.toLowerCase().includes(props.input) ||
                L.size.toString().toLowerCase().includes(props.input) ||
                L.keycaps.toString().toLowerCase().includes(props.input) ||
                L.switches.toString().toLowerCase().includes(props.input) ||
                L.brand.toString().toLowerCase().includes(props.input) ||
                L.stabilizers.toString().toLowerCase().includes(props.input)
                
            );
            // return L.input?.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <li className="justify-content-center nav nav-masthead" key={item.id}>
                <br/>
                Keyboard: {item.brand}
                <br/>
                Switch Type: {item.switches}
                <br/>
                Stabilizers: {item.stabilizers}
                <br/>
                Keycaps: {item.keycaps}
                <br/>
                Layout: {item.size}
                <br/>
                Price: {item.price}
                <br/>
                </li>
                
                
            ))}
        </ul>
    )
}


export default List;