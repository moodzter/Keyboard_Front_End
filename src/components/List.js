import { React, useState, useRef } from 'react'

import data from "./ListData.json"
import axios from 'axios'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

function List(props) {

    const selectedKeyboard = useRef()

    const handleCreate = (event) => {
        
        axios
        .post('http://localhost:8000/api/keyboards', selectedKeyboard)
        .then((response) => {
            console.log('successfully added')
        })
    }

    const handlePotato = (nKB) => {
        selectedKeyboard.current = nKB
        
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     handleCreate(selectedKeyboard)
    // }
    // let emptyKeyboard = {
    //     brand: '',
    //     switches: '', 
    //     keycaps: '', 
    //     stabilizers: '',
    //     price: '', 
    //     size: '', 
    //     img: ''
    // }
    // let [keyboard, setKeyboard] = useState(emptyKeyboard)

    // const handleChange = (event) => {
    //     setKeyboard({ ...keyboard, [event.target.name]: event.target.value })
    // }

////////////////////////////////////////////////////////////////////////

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
                <><li className="justify-content-center nav nav-masthead" key={item.id}>
                    <br />
                    Keyboard: {item.brand}
                    <br />
                    Switch Type: {item.switches}
                    <br />
                    Stabilizers: {item.stabilizers}
                    <br />
                    Keycaps: {item.keycaps}
                    <br />
                    Layout: {item.size}
                    <br />
                    Price: {item.price}
                    <br />
                </li><form onSubmit={handleCreate}> <input onClick= {() => {handlePotato(item)}} type='submit'  value='Save to Builds' /></form></>
                
                
            ))}
        </ul>
    )
}


export default List;