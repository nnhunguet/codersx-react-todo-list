import React, { Component } from 'react';
import './Modal.css';
import ModalPopup from './ModalPopup';

export default class Modal extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleOnCancel = this.handleOnCancel.bind(this);
    this.handOnOK = this.handOnOK.bind(this);
  }

  handleOpenModal() {
    this.setState(
      { 
        isOpen: true
      }
    )
  }
  handleOnCancel() {
    this.setState(
      { 
        isOpen: false
      }
    )
  }

  handOnOK() {
    this.setState(
      { 
        isOpen: false
      }
    )
  }

  render() {
    return(
      <>
        <button className='open' onClick={this.handleOpenModal}>OPEN</button>
        <ModalPopup 
          content='12345'
          handleOnCancel={this.handleOnCancel}
          isOpen={this.state.isOpen}
          handOnOK={this.handOnOK} // dung rooif ban // bỏ  cái handleOpene đi , vì handleopen là chỉ dành cho cái button tthôi bạn 
        > 
          <h1>Hello H1</h1>
          <h2>Hello H2</h2>
          <p>Paragrap</p>
        </ModalPopup>
      </>
    )
  }
}  