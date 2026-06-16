import { useState } from 'react';
import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/Input';

function App() {
  const [text, setText] = useState('');
  
  const handleInputChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        { text }
        <Input id="myInput" text="My Input:" value={text} onChangeHandler={handleInputChange} />
      </header>
    </div>
  );
}

export default App;
