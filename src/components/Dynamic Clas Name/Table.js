import React, { Component } from 'react'
import './css/table.css'

class Table extends Component {
  constructor() {
    super()
  }

  render() {
    const { table } = this.props;
    console.log(table);
    return (
      <div>
        <table className='table'>
          <tr className='row-class row-1'> 
            <th>#</th>
            <th>First</th>
            <th>Last</th>
            <th>Handle</th>
          </tr>
          {
            table.map((item,index) => <tr><td>{index+1}</td><td>{item.first}</td><td>{item.last}</td><td>{item.handle}</td></tr>) 
          }
        </table>
      </div>
    )
  }
}

export default Table