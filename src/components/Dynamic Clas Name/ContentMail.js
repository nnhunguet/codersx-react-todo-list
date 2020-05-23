import React, { Component } from 'react'
import './css/ContentMail.css' 

class ContentMail extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='contentMail'>
        <header className='contentMail-header'>
          <div className='avatar'>
          </div>
          <div>
            <p>
              <span className='display'>MEMBER SINCE</span>
              <span>{Date()}</span>
            </p>
            <p>
              <span className='display'>POST</span>
              <span>1234</span> 
            </p>
          </div>
        </header>
        <hr></hr>
        <div className='content'>
          <p className='pre'>
            Incididunt sit reprehenderit veniam nisi culpa sunt veniam anim in amet. Occaecat qui adipisicing elit ea et deserunt. Ullamco sunt ipsum consectetur enim eu ex irure sit veniam occaecat ad consectetur proident. Irure consectetur dolore id officia amet ad exercitation esse non eiusmod anim adipisicing. Est nostrud sit consequat ullamco exercitation nostrud pariatur ex magna aliqua amet sint qui.

Sunt ipsum elit in in. Officia ipsum exercitation exercitation qui cillum do ullamco aliquip Lorem. Non nostrud dolor mollit ullamco ullamco aliquip aliqua quis esse. Amet exercitation labore eu ex do laboris. Velit dolore quis eu culpa sit consectetur adipisicing dolore aliqua exercitation pariatur aute incididunt voluptate. Dolore consectetur voluptate elit id do proident quis sunt consectetur incididunt commodo excepteur cillum. Minim culpa minim aliquip id sit eu quis magna sit enim et.
<br></br>
Eu sint laborum exercitation aute nisi irure occaecat do velit ea aliquip. Quis fugiat irure occaecat fugiat excepteur ex mollit cillum laboris duis. Occaecat tempor duis mollit dolor proident. Minim labore consectetur ex ipsum non excepteur culpa. Excepteur veniam duis mollit ullamco deserunt nulla eu est exercitation sint laboris culpa.
<br></br>
Elit laborum magna qui labore irure amet sunt nisi eiusmod fugiat deserunt. Do proident amet laboris reprehenderit elit sit commodo et Lorem est ea id. Qui fugiat aute voluptate esse ea dolor ex reprehenderit amet eu cupidatat labore esse quis. Deserunt ad sit sit veniam anim quis quis incididunt enim. Ea adipisicing commodo nisi ullamco ea pariatur sint voluptate officia.
<br></br>
Ut eu culpa adipisicing laboris tempor voluptate enim aliqua consequat et labore aliquip irure. Officia esse consectetur consequat minim velit veniam qui et cillum excepteur. Incididunt ipsum id in consectetur adipisicing id. Aute ipsum amet id consectetur non est aute duis culpa ad et. Incididunt sit est et sint do qui in ad incididunt quis officia exercitation adipisicing irure. Aute dolore commodo laboris aliqua.            
          </p>
        </div>
        <hr></hr>
      </div>
    )
  }
}

export default ContentMail