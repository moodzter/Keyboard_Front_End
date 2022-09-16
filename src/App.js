import { React, useState } from "react";
import axios from "axios";
import CreateKeyboard from './components/CreateKeyboard';
import ShowKeyboard0 from './components/ShowKeyboard0';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
// import SearchBar from './components/SBar';
// import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className='App'>
      <Header/>
      <CreateKeyboard/>
      <ShowKeyboard0/>
      <Footer/>
    </div>
  );
}

export default App;