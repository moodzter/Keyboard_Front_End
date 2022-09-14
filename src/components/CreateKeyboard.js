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
            <form>
                <label>Brand:</label>
                <input type ='text' name='' onChange={handleChange}/>
                <br/>
                <br/>
                <label>Switches:</label>
                <input type ='text' name='' onChange={handleChange}/>
                <br/>
                <br/>
                <label>Keycaps:</label>
                <input type ='text' name='' onChange={handleChange}/>
                <br/>
                <br/>
                <label>Stabilizers:</label>
                <input type ='text' name='' onChange={handleChange}/>
                <br/>
                <br/>
                <label>Price:</label>
                <input type ='text' name='' onChange={handleChange}/>
                <br/>
                <br/>
                <label>Size:</label>
                <input type='text' name='' onChange={handleChange}/>
                <br/>
                <br/>
                <label>IMG URL:</label>
                <input type ='text' name='' onChange={handleChange}/>
                <input type ='submit' onClick={handleCreate} value='SUBMIT'/>
            </form>
        </div>
    );
}


export default CreateKeyboard                          