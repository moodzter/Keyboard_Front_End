import {React, useState} from "react";
import TextField from "@mui/material/Textfield";
import List from "./components/Item List"
import "./App.css";

function App() {
    return( 
        <div className="main">
           <h1> Database Search </h1> 
            <div className="search">
            <TextField id="outlined-basic"/>
            </div>

        </div>
    )
}