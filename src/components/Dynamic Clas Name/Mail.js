import React, { Component } from 'react'
import './css/Mail.css'

class Mail extends Component {
  render() {
    const classNames = require('classnames')

    const { mail } = this.props;
    let className = classNames('TodoItem', {'TodoItem-active':mail.active})
    return (
      <div className="mail-item">
        <p className={className}>{mail.title}</p>
      </div>
    )
  }
}

export default Mail