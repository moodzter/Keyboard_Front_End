import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./components/List";
import Footer from './components/Footer';
import Header from './components/Header';
import "./src/sbar.css";

function SearchBar() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return( 
        <div className="main">
           <Header/>
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
        <Footer/>
        </div>
    );
}



export default SearchBar;