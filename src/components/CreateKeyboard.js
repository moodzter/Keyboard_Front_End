import { useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

const CreateKeyboard = ({
    setShowForm,
    setShowBuilds,
    showForm,
    showBuilds
}) => {
    
    const handleCreate = (addKeyboard) => {
        axios
        .post('http://localhost:8000/api/keyboards', addKeyboard)
        .then((response) => {
            console.log('successfully added')
        })
        setShowForm(!showForm)
        setShowBuilds(!showBuilds)
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
        <div className="createForm">
            <h2>Create Keyboard</h2>
            <form className="text-primary fw-bold" onSubmit={handleSubmit}>
                <label className="createInput">Brand:</label>
                <input type ='text' name='brand' onChange={handleChange}/>
                <br/>
                <br/>
                <label className="createInput">Switches:</label>
                <input type ='text' name='switches' onChange={handleChange}/>
                <br/>
                <br/>
                <label className="createInput">Keycaps:</label>
                <input type ='text' name='keycaps' onChange={handleChange}/>
                <br/>
                <br/>
                <label className="createInput">Stabilizers:</label>
                <input type ='text' name='stabilizers' onChange={handleChange}/>
                <br/>
                <br/>
                <label className="createInput">Price:</label>
                <input type ='number' name='price' onChange={handleChange}/>
                <br/>
                <br/>
                <label className="createInput">Size:</label>
                <input type='text' name='size' onChange={handleChange}/>
                <br/>
                <br/>
                <Button type='submit' color='success' value='SUBMIT'>SAVE BUILD</Button>
            </form>
        </div>
    );
}


export default CreateKeyboard                          