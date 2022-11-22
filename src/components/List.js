import { React, useState } from 'react'
import {Button} from 'reactstrap'
import data from "./ListData.json"
import axios from 'axios'

\

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
        <div>
        <ul className="listWrapper">
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
                </li><form onSubmit={() => {handleCreate(item)}}>
                    <Button color="primary" input type='submit'>SAVE TO BUILDS</Button>
                    </form></>
                
                
                ))}
        </ul>
        </div>
    )
}


export default List;