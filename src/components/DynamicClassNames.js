import React, { Component } from 'react'

import Mail from './Dynamic Clas Name/Mail';
import ContentMail from './Dynamic Clas Name/ContentMail';
import Table from './Dynamic Clas Name/Table';

import { ReactComponent as Email } from '../icons/email.svg'
import { ReactComponent as Star } from '../icons/star.svg'
import { ReactComponent as Clock } from '../icons/clock.svg'
import { ReactComponent as Important } from '../icons/important.svg'
import { ReactComponent as Sent } from '../icons/sent.svg'
import { ReactComponent as RecycleLetter } from '../icons/recycleLetter.svg'
import { ReactComponent as RecycleBin } from '../icons/recycleBin.svg'

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
    ];
    this.table = [
      {
        first: 'Mark',
        last: 'Otto',
        handle: '@mdo'
      },
      {
        first: 'Jacob',
        last: 'Thornton',
        handle: '@fat'
      },
      {
        first: 'Mark',
        last: 'Otto',
        handle: 'mdo'
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
            <Table  table={this.table}/>
          }
        </div>
      </>
    )
  }
}

export default DynamicClassNames