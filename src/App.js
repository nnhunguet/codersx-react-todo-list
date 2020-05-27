import React from 'react';
import './App.css';
import Header from './components/Header';
import FormLogin from './components/FormLogin';
import TabMenu from './components/TabMenu';
import SocicalNetWork from './components/SocialNetwork';
import Status from './components/Status';
import DynamicClassNames from './components/DynamicClassNames';
import State from './components/State';
import Modal from './components/Modal';

import { ReactComponent as Home } from './icons/home.svg';
import { ReactComponent as Gift } from './icons/gift.svg';
import { ReactComponent as Cloud } from './icons/cloud.svg';
import { ReactComponent as Coffee } from './icons/coffee.svg';
import { ReactComponent as Setting } from './icons/setting.svg';

function App() {
  const items = [
    {
      icon: <Home/>, 
      title: "Home"
    },
    {
      icon:<Gift/>,
      title:"Deals"
    },
    {
      icon:<Cloud/>,
      title:"Upload"
    },
    {
      icon:<Coffee/>,
      title:"Work"
    },
    {
      icon:<Setting/>,
      title:"Settings"
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <h1> Sign Up</h1>
        <FormLogin email="abc@example.com"/>
      </header>     
      <section className="tab-menu">
        <h1> Tabmenu </h1>
        <table className="table-menu">  
          <tr>
            <TabMenu items={items}/>
          </tr>
        </table>
      </section> 
      <div className="components-social-network">
        <h1>Social NetWork</h1>
        <SocicalNetWork />
      </div>
      <div className="container">
        <div className="status"> 
          <Status/>
        </div>
      </div>
      <div className="dynamic-class-names">
        <DynamicClassNames/>
      </div>
      <div className='State'>
        <State/>
      </div>
      <div className='wrap-Modal'>
        <div className='Modal'>
          <Modal/>
        </div>
      </div>
    </div>
  );
}

export default App;
