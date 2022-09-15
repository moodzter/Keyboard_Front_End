import { React, useState } from "react";
import axios from "axios";
import CreateKeyboard from './components/CreateKeyboard';
import ShowKeyboard0 from './components/ShowKeyboard0';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SBar';




// import Button from 'react-bootstrap/Button';
import './App.css';


function App() {
  


  return (
    
    <div className='App'>
      <Header/>
      

      <h1>

        </h1>

      <CreateKeyboard/>
      <ShowKeyboard0/>
      <SearchBar/>
      <Footer/>
    </div>
    
  );
}

export default App;
