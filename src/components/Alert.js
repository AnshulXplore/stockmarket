import React from 'react'
import './style/share.css'

export default function Alert(props) {
  return (
    <div id='alertmedia' style={{position:'sticky',top:'0',zIndex:'1000',marginBottom:'0px'}} className="alert alert-warning" role="alert">
  {props.error}
</div>

  )
}
