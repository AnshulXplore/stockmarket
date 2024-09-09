import React, { useState ,useContext} from 'react'
import { Link } from 'react-router-dom'
import stockContext from "./stockContext";
import SecondNav from './secondnav';

export default function Sign() {
    const [data,setdata]=useState({name:"",email:"",password:"",age:""})
    const a=useContext(stockContext);
    const submitdata=async ()=>{

        const {email,pass}=data
        const response=await fetch('http://localhost:5000/login',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email,pass})
        })
        const json=await response.json();
        if(!json.errors){
            console.log(json)
        }
        else{
            console.log(json)
        }
        // console.log(data);
    }
    const onchange=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
  return (
    <>
    <SecondNav home={'Stocks And Performance'} backColor={'#21b7a8'} textColor={'black'} hoverColor={'blue'}/>
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" onChange={onchange} className="form-control" name='email' id="example" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your Email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" onChange={onchange} className="form-control" name='pass' id="exampleInputPassword1"/>
  </div>
  
</form>
  <button onClick={submitdata}>Submit</button>
  <h1>Succefully data enter</h1>
    </>
  )
}
