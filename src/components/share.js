import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class share extends Component {
  
  render() {
  let {name,open,close,row,forpath}=this.props

    return (
    <tr>
      <th scope="row">{row}</th>
      <td>{name}</td>
      <td>{open ? open :'loading...'}</td>
      <td>{close ? close : 'loading..'}</td>
      <td>
        <Link to={`/${forpath}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000"   fill="none">
          <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </td>
    </tr>
    )
  }
}

export default share
