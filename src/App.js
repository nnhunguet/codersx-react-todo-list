import React from 'react';
import './App.css';
import Header from './components/Header'
import FormLogin from './components/FormLogin'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <TodoItem/>
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
        </a> */}
        <Header/>
        <h1> Sign Up</h1>
        <FormLogin/>
      </header>
      
    </div>
  );
}

export default App;
