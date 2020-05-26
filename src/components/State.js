import React, { Component } from 'react';

import Input from './State/Input';
import SearchBox from './State/SearchBox'
import Pagination from './State/Pagination'

class State extends Component {
  constructor() {
    super();
  }

  onHandleFocusAPI = () => {
    // call some external api here
  }
  render() {
    return(
      <>
        <div className='Input'>
          <Input/>
        </div>
        <div className='searchBox'>
          <SearchBox handleFocus={this.onHandleFocusAPI}/>
        </div>
        <div className='Pagination'>
          <Pagination/>
        </div>
      </>
    )
  }
}

export default State;