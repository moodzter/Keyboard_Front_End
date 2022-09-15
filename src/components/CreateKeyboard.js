import { useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

const CreateKeyboard = ({}) => {
    
    const handleCreate = (addKeyboard) => {
        axios
        .post('http://localhost:8000/api/keyboards', addKeyboard)
        .then((response) => {
            console.log('successfully added')
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleCreate(keyboard)
        setKeyboard(emptyKeyboard)
    }
    let emptyKeyboard = {
        brand: '',
        switches: '', 
        keycaps: '', 
        stabilizers: '',
        price: '', 
        size: '', 
        img: ''
    }
    let [keyboard, setKeyboard] = useState(emptyKeyboard)

    const handleChange = (event) => {
        setKeyboard({ ...keyboard, [event.target.name]: event.target.value })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Brand:</label>
                <input type ='text' name='brand' onChange={handleChange}/>
                <br/>
                <br/>
                <label>Switches:</label>
                <input type ='text' name='switches' onChange={handleChange}/>
                <br/>
                <br/>
                <label>Keycaps:</label>
                <input type ='text' name='keycaps' onChange={handleChange}/>
                <br/>
                <br/>
                <label>Stabilizers:</label>
                <input type ='text' name='stabilizers' onChange={handleChange}/>
                <br/>
                <br/>
                <label>Price:</label>
                <input type ='number' name='price' onChange={handleChange}/>
                <br/>
                <br/>
                <label>Size:</label>
                <input type='text' name='size' onChange={handleChange}/>
                <br/>
                <br/>
                <input type ='submit' value='SUBMIT'/>
            </form>
        </div>
    );
}


export default CreateKeyboard                          