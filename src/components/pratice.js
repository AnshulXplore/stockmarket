import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class pratice extends Component {
  
state={
    game:'',
    days:'',
    isgame:false,
    isdays:false
}
componentDidMount(){
    
}
  render() {
    let str='hi i am a anshul';
    let reasult=str.split(' ');
    
    let hello= reasult.map(e=>{
        return (e.split('').reverse().join(''))
    })
    console.log(hello)
    // hello=hello.join(',')
    
    
    
    const option =['cricket','hockey','football']
    const days =['weekday','weekend']
    return (
      <div>
        {/* <h1>SELECT GAME</h1>
          <form>
        {option.map((e)=>{
           return (
            <>
           <label for={e} onChange={(item)=>{
             this.setState({game:item.target.value})
             this.setState({isgame:true})
           }}>
           <input type="radio" value={e} name='optionGroup'/> {e}
           </label><br/>
            </>
           )
        })}
        </form>
        <h1>SELECT DAYS</h1>
          <form>
        {days.map((e)=>{
           return (
            <>
           <label for={e} onChange={(item)=>{
              this.setState({days:item.target.value})
              this.setState({isdays:true})
           }}>
           <input type="radio" value={e} name='optionGroup'/> {e}
           </label><br/>
            </>
           )
        })}
        </form>
       {this.state.isgame===true && this.state.isdays===true ? <h1>you will play {`${this.state.game},${this.state.days}`}</h1>  : '' } */}
        {hello}
    </div>
    )
  }
}

export default pratice
