import React, { Component } from 'react';
import './Input.css'
import { ReactComponent as Tick} from './tick.svg'

export default class Input extends Component {
  render() {
    return(
      <div className='wrap-InputState'>
        <p><Tick/>Input with success</p>
        <input type='text'/>
        <p>Help block with success</p>
      </div>
    )
  }
}