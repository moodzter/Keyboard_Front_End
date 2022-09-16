import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from 'axios'
import List from "./List";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
// import Footer from './Footer';
// import Header from './Header';


function SearchBar() {



    const [inputText, setInputText] = useState("");
    const inputHandler = (e) => {
        
        // i might change it to uppercase
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return( 
        <div className="main cover-container float-md ">
           
            <div className="search">
            <TextField 
            id="outlined-basic"
            onChange= {inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
            />
            </div>

        <List input={inputText} />
        
        </div>
    );
}



export default SearchBar;