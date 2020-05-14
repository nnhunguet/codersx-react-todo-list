import React, { Component } from 'react';
import '../componentCss/RecommenedFriends.css'

class RecommenedFriends extends Component{
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <tr className="row">
          <td className="left">
            <img src={this.props.friend.avatar} width="60px" height="60px" className="avatar"/>
            <div className="desc">
              <p>{this.props.friend.name}</p>
              <p>Gợi ý cho bạn</p>
            </div>
          </td>
          <td className="right">
            Theo dõi
          </td>
        </tr>
      </>
      )
  }
}

export default RecommenedFriends