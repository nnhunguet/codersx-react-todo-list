import React, { Component } from 'react';

class Header extends Component{
    render() {
        return (
            <div className="header">
              <div className="left-header">
                <svg class="bi bi-arrow-left" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                  <path fill-rule="evenodd" d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>
                </svg>
                <b>Go back</b>
              </div>
              <div className="center-header">
                <img src="https://yt3.ggpht.com/QxyJh1Z6iIsqKTxdyuExzNqQ9S8YiHWshcG0lfAg-T-UORK5uTQXAv0cZdPFwov-FCcHoEujfw=w1440-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj"   height="80px" alt="photo"></img>
              </div>
              <div className="right-header">
                <p>
                  Sign Up
                </p>
              </div>
            </div>
        )       
    }				   
}

export default Header