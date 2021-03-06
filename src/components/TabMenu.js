import React, { Component } from 'react';

function Menu(props) {
  return (<td className="wrapper-tabmenu">{props.icon}<p>{props.title}</p></td>)
}

class TabMenu extends Component{
  render() {
    return (
      this.props.items.map(item => {
        return Menu(item)
      })
    )
  }
}

export default TabMenu