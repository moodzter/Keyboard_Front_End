import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./List";
// import Footer from './Footer';
// import Header from './Header';


function SearchBar() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        // i might change it to uppercase
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return( 
        <div className="main cover-container float-md ">
           <h2>Keyboard Search</h2>
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