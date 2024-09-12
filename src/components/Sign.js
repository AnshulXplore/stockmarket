import React, { useState,useContext, useEffect, } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './style/sign.css'
import Alert from './Alert'
import stockContext from "./stockContext";

export default function Sign() {
    const a=useContext(stockContext);
    const [data, setData] = useState({ name: "", email: "", password: "", age: "" })
    const [datalogin,setdata]=useState({email:"",password:""})
    const [isAlert,setAlert]=useState(false);
    const[error,seterror]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        document.body.style.overflow='auto'
    },[])
//LOGIN PAGE API:-
    const loginData=async ()=>{
      const {email,pass}=datalogin
      const response=await fetch('https://stockmarketbackend-3.onrender.com/login',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({email,pass})
      })
      const json=await response.json();
      if(!json.error){
        if(json.msg){
          seterror(json.msg);
          setAlert(true)
          setTimeout(() => {
            setAlert(false);
          }, 3000);
        }
        else{
            a.setisLoginButton(true)
            a.setJwtToken(json.user);
            console.log("jwt token :-"+typeof(json.user))
            setAlert(true);
            seterror('Login succesfull')
            navigate('/');
            setTimeout(() => {
                setAlert(false);
              }, 3000);
        }
      }
      else{
        setAlert(true);
        console.log(json)
        if(json.error[0].msg){
          seterror(json.error[0].msg);
          console.log(error)
        }

        setTimeout(() => {
          setAlert(false);
        }, 3000);
      }
      
  }
  //THIS ONCHANGE FOR LOGIN INPUTS
  const onchangeLogin=(e)=>{
      setdata({...datalogin,[e.target.name]:e.target.value})
  }
  

  //SIGNUP PAGE API:-
    const submitData = async () => {
        const { name, email, pass, age,phone } = data
        const response = await fetch('https://stockmarketbackend-3.onrender.com/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, pass, age ,phone})
        })
        const json = await response.json();
        // console.log(json.data);
        if(!json.errors){
            setAlert(true);
            seterror('Sign Up succesfull')
            setTimeout(() => {
                setAlert(false);
              }, 3000);
        }
        else{
            if(json.errors[0].msg){
          seterror(json.errors[0].msg);
          console.log(json.errors)
          console.log(json)
          setAlert(true)
          setTimeout(() => {
            setAlert(false);
          }, 3000);
        }
        else{
            seterror(json.errors);
            setAlert(true)
            setTimeout(() => {
              setAlert(false);
            }, 3000);
        }
    }
      
    }
//THIS ONCHANGE FOR SIGN INPUTS
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    return (
        <>
        {isAlert ?  <Alert error={error}/> :''}
            <Link to="https://front.codes/" className="logo" target="_blank">
            </Link>
	 
            <div  className="signdiv1"  id='signmaindiv'>
                {/* <div className="container "> */}
                    {/* <div className="row full-height justify-content-center"> */}
                        {/* <div className="col-12 text-center align-self-center "> */}
                            <div className=" signdiv2">
                                <h6  className="mb-0 pb-3"><span id='signspanlogin'>Log In </span><span id='signspansign'>Sign Up</span></h6>
                                  <input className="checkbox"  type="checkbox" id="reg-log" name="reg-log" defaultChecked /> 
                                <label htmlFor="reg-log"></label>
                                <div className="card-3d-wrap mx-auto">

                                    <div className="card-3d-wrapper">
                                    
                                        <div id='loginanshulcard' className="card-front">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3">Log In</h4>
                                                    <div className="form-group">
                                                        <input type="email" name="email" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" onChange={onchangeLogin} />
                                                        <i className="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="password" name="pass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" onChange={onchangeLogin}/>
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <Link id='signbutton1' onClick={loginData} to="#" className="btn mt-4">submit</Link>
                                                    <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    


                                        <div id='signanshulcard' className="card-back">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 style={{position:'relative',top:'25px'}} className="mb-4 pb-3">Sign Up</h4>
                                                    <div className="form-group">
                                                        <input onChange={onChange} type="text" name="name" className="form-style" placeholder="Your Full Name" id="logname" autoComplete="off" />
                                                        <i className="input-icon uil uil-user"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input onChange={onChange} type="email" name="email" className="form-style" placeholder="Enter Your Email" id="logname2" autoComplete="off" />
                                                        <i className="input-icon uil uil-user"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input onChange={onChange} type="Number" name="phone" className="form-style" placeholder="Enter Your Phone Number" id="number" autoComplete="off" />
                                                        <i className="input-icon uil uil-user"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input onChange={onChange} type="password" name="pass" className="form-style" placeholder="Enter Your Password" id="logemail2" autoComplete="off" />
                                                        <i className="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input onChange={onChange} type="Number" name="age" className="form-style" placeholder="Your Age" id="logpass2" autoComplete="off" />
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <Link id='signbutton1' style={{position:'relative',bottom:'14px'}} to="#" className="btn mt-4" onClick={submitData}>submit</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                {/* </div> */}
            {/* </div> */}
        </>
    )
}
