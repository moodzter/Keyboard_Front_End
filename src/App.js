import logo from './logo.svg';
import './App.css';
import CreateKeyboard from './components/CreateKeyboard'
import ShowKeyboard0 from './components/ShowKeyboard0'
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div>
      <h1>Hello World!!!! add some letters</h1>
      <CreateKeyboard/>
      <ShowKeyboard0/>
    </div>
  );
}

export default App;
