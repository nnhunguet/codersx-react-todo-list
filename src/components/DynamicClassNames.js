import React, { Component } from 'react'

import Mail from './Dynamic Clas Name/Mail';
import ContentMail from './Dynamic Clas Name/ContentMail';
import Table from './Dynamic Clas Name/Table';

import { ReactCompnent as Email } from '../icons/email.svg'
import { ReactCompnent as Star } from '../icons/star.svg'
import { ReactCompnent as Clock } from '../icons/clock.svg'
import { ReactCompnent as Important } from '../icons/important.svg'
import { ReactCompnent as Sent } from '../icons/sent.svg'
import { ReactCompnent as RecycleLetter } from '../icons/recycleLetter.svg'
import { ReactCompnent as RecycleBin } from '../icons/recycleBin.svg'

class DynamicClassNames extends Component {
  constructor() {
    super();
    this.mails = [
      {
        title: "Hộp thư đến",
        image: <Email/>,
        active: false
      },
      {
        title: "Có gắn dấu sao",
        image: <Star/>,
        active: true
      },
      {
        title: "Đã tạm ẩn",
        image: <Clock/>,
        active: false
      },
      {
        title: "Quan trọng",
        image: <Important/>,
        active: false
      },
      {
        title: "Đã gửi",
        image: <Sent/>,
        active: false
      },
      {
        title: "Thư rác",
        image: <RecycleLetter/>,
        active: false
      },
      {
        title: "Thùng rác",
        image: <RecycleBin/>,
        active: false
      }
    ]
  }
  render() {
    return (
      <>
        <div className="mail">
          {
            this.mails.map(mail => <Mail mail={mail}/>)
          }
        </div>
        <div className='ContentMail'>
          {
            <ContentMail/>
          }
        </div>
        <div className='table'>
          {
            <Table/>
          }
        </div>
      </>
    )
  }
}

export default DynamicClassNames