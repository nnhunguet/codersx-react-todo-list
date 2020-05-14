import React, {Component} from 'react';
import RecommenedFriends from './RecommendedFriends'
import { ReactComponent as Setting } from '../icons/setting.svg';
import { ReactComponent as Bars } from '../icons/bars.svg';
import { ReactComponent as Interface } from '../icons/interface.svg';

function ComponentSetting(title)  {
    return (
      <>
        <Setting/>
        <span>{title}</span>
      </>
    )
}

function HeaderOption1(title)  {
  return (
    <>
      <Bars/>
      <span>{title}</span>
    </>
  )
}

function HeaderOption2(title)  {
  return (
    <>
      <Interface/>
      <span>{title}</span>
    </>
  )
}

class SocialNetWork extends Component{
  constructor() {
    super();
    this.friends = [
      {
        avatar: 'https://cafebiz.cafebizcdn.vn/thumb_w/600/2019/7/18/ngctrinhxxxxxleke-1563468383713667838850-crop-1563468392003748039319.jpg',
        name: 'Hungg'
      },
      {
        avatar: 'https://nghesiviet.vn/storage/files/7/midu/anh-hot-girl-midu.jpg',
        name: 'Midu'
      },
      {
        avatar: 'https://scontent-hkg4-1.xx.fbcdn.net/v/t1.0-0/p640x640/97046577_1536713929840597_2065795693607387136_o.jpg?_nc_cat=107&_nc_sid=07e735&_nc_oc=AQkH6pPejjNWHH8yHZ6L2JX_DiB9dI1iJmg2Vjp6590RC_nLZgCyxS1U5NKtBB6Gqmk&_nc_ht=scontent-hkg4-1.xx&_nc_tp=6&oh=0f13c8c66720e432e309d9fd379be181&oe=5EE23C2C',
        name:'Noname'
      }
    ]

  }
  render() {
    return (
      <div className="container">
        <div className="header-1">
          <div className="header-social">
            <p className="h-left">Bài Viết</p>
            <div className="h-right">
              <div className="h-ringht-1 h-right-margin">
                {ComponentSetting("Bộ Lọc")}
              </div>
              <div className="h-ringht-1">
                {ComponentSetting("Quản lý bài viết")}
              </div>
            </div>
          </div>
          <hr className="hr"></hr>
          <div className="header-option">
            <div className="h-option option-1">
              {HeaderOption1("Xem theo danh sách")}
            </div>
            <div className="h-option option-2">
              {HeaderOption2("Xem theo danh sách")}
            </div>
          </div>
        </div>

        <section className="friends">
          <table className="table-friend">
            <tr className="row">
              <td className="item-1">Gợi ý cho bạn</td>
              <td>Xem tất cả</td>
            </tr>
            {
              this.friends.map((friend) => <RecommenedFriends friend={friend}/>) 
            }
          </table>
        </section>
      </div>
    )
  }
}

export default SocialNetWork