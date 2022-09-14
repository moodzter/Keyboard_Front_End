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
                <li className="justify-content-center" key={item.id}>
                <br/>
                {item.brand}
                <br/>
                {item.switches}
                <br/>
                {item.keycaps}
                <br/>
                {item.stabilizers}
                <br/>
                {item.price}
                <br/>
                {item.size}
                <br/>
                </li>
                
                
            ))}
        </ul>
    )
}


export default List;