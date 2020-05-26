import React, { Component }  from 'react';
import './SearchBox.css'
import {ReactComponent as Search} from './search.svg';
import classNames from 'classnames'

export default class SearchBox extends Component {

  constructor() {
    super();
    this.state = {
      isFocused: false,
      length: 0,
      value: '',
      notTrue: false
    }
    this.handleFocus = this.handleFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFocus(event) {
    console.log(event);
    this.setState({ isFocused: !this.state.isFocused });
  }

  async handleChange(event) {
    await this.setState({ 
      length: event.target.value.length, 
      value: event.target.value
    });
    (this.state.value.slice(0,3) === '090' && this.state.length <= 10 && Number(this.state.value) > -1 )
    ?
    this.setState( {notTrue: false} ) : this.setState( {notTrue: true} );
    console.log(Number(this.state.value));
    console.log(typeof NaN);
  }

  render() {
    return(
      <div className={classNames('wrap-searchBox', {'wrap-searchBox-length': this.state.notTrue})}>
        { this.state.isFocused
          ? <input type='text' onBlur={this.handleFocus} onFocus={this.handleFocus} onChange={this.handleChange} placeholder='Type something to search ...'/>
          : <>
              <input type='text' onBlur={this.handleFocus} onFocus={this.handleFocus} placeholder='Type something to search ...'/>
              <div className='wrap-icon'>
                <Search/>
              </div>
            </>
        }
      </div>
    )
  }
}