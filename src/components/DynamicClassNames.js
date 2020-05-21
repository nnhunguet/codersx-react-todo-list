import React, { Component } from 'react'

import Mail from './Dynamic Clas Name/Mail';
import ContentMail from './Dynamic Clas Name/ContentMail';
import Table from './Dynamic Clas Name/Table';

class DynamicClassNames extends Component {
  constructor() {
    super();
    this.mails = [
      {
        title: "Hộp thư đến",
        active: false
      },
      {
        title: "Có gắn dấu sao",
        active: true
      },
      {
        title: "Đã tạm ẩn",
        active: false
      },
      {
        title: "Quan trọng",
        active: false
      },
      {
        title: "Đã gửi",
        active: false
      },
      {
        title: "Thư rác",
        active: false
      },
      {
        title: "Thùng rác",
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
      </>
    )
  }
}

export default DynamicClassNames