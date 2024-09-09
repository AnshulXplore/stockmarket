import React, { Component } from 'react'
import Spinner from './spinner.gif'

export class spinner extends Component {
  render() {
    return (
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} className='text-center'>
        <img src={Spinner} alt="not" />
      </div>
    )
  }
}

export default spinner
