import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./List";
// import Footer from './Footer';
// import Header from './Header';
// import "./sbar.css";

function SearchBar() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (event) => {
        // i might change it to uppercase
        var lowerCase = event.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return( 
        <div className="main">
           
            <div className="search">
            <TextField 
            id="outlined-basic"
            onChange={inputHandler}
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