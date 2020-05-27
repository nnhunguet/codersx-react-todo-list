import React, { Component } from 'react';
import './Modal.css';
import { ReactComponent as X} from '../icons/x.svg';
import classNames from 'classnames'
import ModalPopup from './ModalPopup';
// giờ bạn truyền 2 prop là 2 function mà bạn handle tắt modal vô trong modalpop up mình coi thử 

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
    // đúng rồi bạn 
  // nút x và decline thì mình sẽ có hàm handleOnCancel
  // accept thì sẽ có hàm handleOnOK
  // nút open là handleOpenModal
  // giowb bạn tách hàm ra đi 
  // mình đi rửa mặt quay lại review nha ! dạ anh ^^
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
          handleOnCancel={this.handleOnCancel}
          isOpen={this.state.isOpen}
          handOnOK={this.handOnOK} // dung rooif ban // bỏ  cái handleOpene đi , vì handleopen là chỉ dành cho cái button tthôi bạn 
        />
      </>
    )
  }
}  