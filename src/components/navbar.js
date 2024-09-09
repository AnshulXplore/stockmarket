import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export  class navbar extends Component {
  
  // static propTypes = {

  // }

  render() {
    return (
      <div id='nav'>
      <nav id='navnav1'>
      <img id='navimg1' src="https://w3assets.angelone.in/wp-content/uploads/2024/04/IPL_COMPOSITE-LOGO_ANGELONE_HORIZONTAL_WHITE_VERSION-192x100-1.png" title="Angel One - Share Market Trading" width="192px" height="100px"/>
<form className="elasticsearch-desktop">
<input id='navsearch' type="search" placeholder="Search Stocks, News, Reports…" className='my-2'/>


<div className="elasticsearch-loader"></div>

</form>
<button id='navlink1'><Link  to="/signup" style={{textDecoration:'none',color:'white'}}>open demat Account</Link> </button>
<button id='navlink2'><Link to="/signup" style={{textDecoration:'none',color:'blue'}}>Login</Link></button>
      </nav>
      </div>
    )
  }
}

export default navbar
