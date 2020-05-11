import React from 'react';
import './App.css';
import Header from './components/Header'
import FormLogin from './components/FormLogin'
import TabMenu from './components/TabMenu'
import { ReactComponent as Home } from './icons/home.svg';
import { ReactComponent as Gift } from './icons/gift.svg';
import { ReactComponent as Cloud } from './icons/cloud.svg';
import { ReactComponent as Coffee } from './icons/coffee.svg';
import { ReactComponent as Setting } from './icons/setting.svg';
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
      <section className="tab-menu">
        <table className="table-menu">  
          <tr>
            <TabMenu icon={<Home/>} title="Home"/>
            <TabMenu icon={<Gift/>} title="Deals"/>
            <TabMenu icon={<Cloud/>} title="Upload"/>
            <TabMenu icon={<Coffee/>} title="Work"/>
            <TabMenu icon={<Setting/>} title="Settings"/>
          </tr>
        </table>
      </section> 
    </div>
  );
}

export default App;
