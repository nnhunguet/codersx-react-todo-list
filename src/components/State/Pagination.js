import React, { Component }  from 'react';
import './Pagination.css'
import classNames from 'classnames'

export default class Pagination extends Component {
  constructor() {
    super();
    this.state = {
      pagination: [
        {
          title: 'Pre',
          active: false
        },
        {
          title: '1',
          active: true
        },
        {
          title: '2',
          active: false
        },
        {
          title: '3',
          active: false
        },
        {
          title: '4',
          active: false
        },
        {
          title: '5',
          active: false
        },
        {
          title: '6',
          active: false
        },
        {
          title: '7',
          active: false
        },
        {
          title: '8',
          active: false
        },
        {
          title: 'Next',
          active: false
        }
      ]
    }
  }

  render() {
    return (
      <>
        <table className='pagination'>
          <tr>
            {
              this.state.pagination.map((item) => {
                return <td className={classNames({'pg-active': item.active})}>{item.title}</td>
              })
            }
          </tr>
        </table>
      </>
    )
  }
}