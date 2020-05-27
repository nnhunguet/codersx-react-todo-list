// bạn lấy hết ở modal bỏ vô đây cho mình xem thử 
// oke rồi anh anh ơi đk rồi ạ

import React, { Component } from 'react';
import './Modal.css';
import { ReactComponent as X} from '../icons/x.svg';
import classNames from 'classnames'

export default class ModalPopup extends Component {
  render() {
    const { handOnOK, handleOnCancel, isOpen } = this.props; 
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
            Ea cupidatat sunt enim est minim veniam occaecat deserunt consectetur minim magna magna cupidatat dolore. Veniam aliqua aliquip duis exercitation quis enim anim enim et elit voluptate. Consequat sint elit deserunt magna ea et minim velit magna ipsum et ea occaecat non. Eiusmod ad deserunt cillum duis ullamco id ad laboris pariatur proident nulla velit eiusmod quis. Elit Lorem et ea cillum consequat irure occaecat amet officia et do ex.
            Qui laborum cillum exercitation cillum qui nisi sit. Culpa ea sint qui aliqua officia enim adipisicing ex mollit. Qui enim ad ea eu in eu sunt dolor magna velit fugiat. Esse cillum eu ipsum anim dolor. Sit aute nostrud et adipisicing consectetur reprehenderit minim id adipisicing aliqua exercitation.        
            Deserunt aute dolore quis irure aliquip sint magna et aliqua mollit laborum. Nostrud culpa dolore do nulla exercitation dolor consectetur et laborum non sit anim esse cillum. Et quis Lorem laboris ad aute Lorem. Quis aute excepteur commodo magna aliquip.
            Irure excepteur mollit esse cupidatat magna irure ut. Nulla sint dolore ad in reprehenderit est. Sit Lorem anim reprehenderit exercitation commodo sunt duis cillum sit quis amet. Commodo ut minim excepteur ut aliqua non ipsum labore elit.
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