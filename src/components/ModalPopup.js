// bạn lấy hết ở modal bỏ vô đây cho mình xem thử 
// oke rồi anh anh ơi đk rồi ạ

import React, { Component } from 'react';
import './Modal.css';
import { ReactComponent as X} from '../icons/x.svg';
import classNames from 'classnames'

export default class ModalPopup extends Component {
  render() {
    const { handOnOK, handleOnCancel, isOpen, children } = this.props; 
    // vì cái div nó dài ra ok rôi đó bạn :D oh vaang _ anh ơi nhưng mà biến mất kiểu thế cũng được hả a _ emtieeur xảo cho nó thêm ! cái class xong opacity 0 
    // A VIẾT ĐI ANH ^^, ý bạn là gì nhỉ À Ý EM là kiểu nó biến mất logic hơn ý ạ ^^ ko kiểu cho opacity = 0
    // phải như này khôg bạn - oke anh ạ ^^ vâng ạ =), thôi giờ ngủ nha bạn oke anh ^^ 
    return(
      <>
        <div className={classNames({'modal-open': isOpen, 'modal-close': !isOpen })}>
          <div className='svg'>
            <X  onClick={handleOnCancel} />
          </div>
          <div>
            <h3>This is a modal 1</h3> 
          </div>
          <div className='para'>
           {children}
          </div>
          <div className='wrap-btn'>
            <button className='btn btn-accept' onClick={handOnOK}>Accept</button>
            <button className='btn btn-decline' onClick={handleOnCancel}>Decline</button>
          </div>
        </div>
      </>
    )
  }
}  