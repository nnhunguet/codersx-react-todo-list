import React, { Component } from 'react'

class Mail extends Component {
  constructor() {
    super();
  }

  render() {
    const { mails } = this.props;
    return (
      <h1>{mails[0].title}</h1>
    )
  }
}

export default Mail