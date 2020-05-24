import React, { Component } from 'react'
import './css/Mail.css'

class Mail extends Component {
  constructor() {
    super()
  }
  render() {
    const classNames = require('classnames')
    const { mail } = this.props;
    console.log(mail);
    let className = classNames('TodoItem', {'TodoItem-active':mail.active})
    console.log(mail);
    return (
      <div className="mail-item">
        <p className={className}>{mail.image}<span>{mail.title}</span></p>
      </div>
    )
  }
}

export default Mail