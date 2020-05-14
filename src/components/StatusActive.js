import React, { Component } from 'react';

class StatusActive extends Component {
  constructor() {
    super();
  }
  render() {
    return(
      <>
        <div>
          <div className="component-active">
            <img src={this.props.item.avatar ? this.props.item.avatar : ''} className={this.props.item.avatar ? 'image' : 'none'}/>
            <p>{this.props.item.title}</p>
          </div>
        </div>
      </>
    )
  }
}

export default StatusActive