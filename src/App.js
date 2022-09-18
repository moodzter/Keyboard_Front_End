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

  let [showForm, setShowForm] = useState(false)
  let [showBuilds, setShowBuilds] = useState(true)
  return (
    <div className='App'>
      <Header 
        setShowForm={setShowForm}
        setShowBuilds={setShowBuilds}
        showForm={showForm}
        showBuilds={showBuilds}
        />  
      {showForm ? 
      <CreateKeyboard
        setShowForm={setShowForm}
        setShowBuilds={setShowBuilds}
        showForm={showForm}
        showBuilds={showBuilds}
        />
      : null}
      {showBuilds ? 
      <ShowKeyboard0/>
      : null}
      <Footer/>
    </div>
  );
}

export default App;