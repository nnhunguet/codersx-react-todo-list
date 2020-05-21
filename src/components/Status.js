import React, { Component } from 'react';
import StatusActive from '../components/StatusActive';

class Status extends Component {
  constructor() {
    super();
    this.items = [
      {
        avatar: 'https://image.flaticon.com/icons/svg/896/896761.svg',
        title: 'Ảnh/Video'
      }, 
      {
        avatar: 'https://image.flaticon.com/icons/svg/1251/1251571.svg',
        title: 'Gắn thẻ bạn bè'
      },
      {
        title: 'Cảm xúc/...'
      }, 
      {
        title: '...'
      }
    ]
  }
  render() {
    return (
      <>
        <div className="header">
          <p>Tạo bài viết</p>
        </div>
        <div className="content">
          <div className="session-1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTm-WfxJ4k7Tx47gKot8fGzVv6aEPHWBgfIgtU_uy5BDy1hBZWG&usqp=CAU" width="80px" height="80px" alt="photo"/>
          </div>
          <div className="title">
            <p>
              Ngọc Trinh ơi, Em đang nghĩ gì thế? 
            </p>
          </div>
        </div>
        <div className="underlined">
        </div>
        <div className="active">
          {
            this.items.map(function(item) {
              return <StatusActive item={item}/>
            }) 
          }
        </div>
      </>
    )
  }
}

export default Status 