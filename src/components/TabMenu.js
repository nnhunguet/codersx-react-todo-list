import React, { Component } from 'react';
class TabMenu extends Component{
  render() {
    return (
      <td>
        <div className="wrapper-tabmenu"> 
          {this.props.icon}
          <p>{this.props.title}</p>
        </div>
      </td>
    )
  }
}

export default TabMenu