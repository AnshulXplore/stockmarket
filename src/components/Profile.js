import { useEffect , useContext, useState} from 'react';
import React  from 'react';
import './style/profile.css'
import SecondNav from './secondnav';
import stockContext from "./stockContext";
import styles from './profile.module.css';
export default function Profile() {
const a=useContext(stockContext)
const[jsonn,setjson]=useState({name:"",age:"",email:"",phone:"",date:""})
    useEffect(()=>{
document.body.style.overflow='auto'
      document.body.style.backgroundColor='#E91E63'
        const submitData = async () => {
            const response = await fetch('https://stockmarketbackend-4.onrender.com/userdetail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json','auth-token':a.jwtToken},
                
            })
            const json = await response.json();
            // console.log(json.data);
            if(!json.errors){
              console.log(json.name)
              setjson({name:json.name,age:json.age,email:json.email,phone:json.phone,date:json.Date})
              
            }
            else{
            //   console.log(json)
              setTimeout(() => {
                
              }, 3000);
            }
          
        }
        submitData();
        console.log(jsonn)

        return () => {
          document.body.style.backgroundColor = '';
      };
    },[a.jwtToken])
  return (
    <>
    <SecondNav home={'Stocks And Performance'} backColor={'rgb(11 7 62 / 81%)'} textColor={'white'} hoverColor={'pink'}/>
      <div style={{backgroundColor:"#E91E63"}} className="page-content page-container profilemaindiv" id="page-content">
        <div  className="padding" id='profilediv2'>
          <div  className="row container d-flex justify-content-center">
            <div style={{position:'relative',top:'200px'}} className="col-xl-6 col-md-12">
              <div className="profilecard user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white  mobilediv">
                      <div className="m-b-25">
                        <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image"/>
                      </div>
                      <h6 className="f-w-600">{jsonn.name}</h6>
                      <p>Trading Acoount</p>
                      <i className="mdi mdi-square-edit-outline feather icon-edit m-t-10"></i>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <h6 className="m-b-20 p-b-5 b-b-default f-w-600 ">Profile Details</h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600 ">Email</p>
                          <h6 className="text-muted f-w-400">{jsonn.email}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600 ">Phone</p>
                          <h6 className="text-muted f-w-400">{jsonn.phone}</h6>
                        </div>
                      </div>
                      <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600 ">Age :-<span style={{color:'white',fontWeight:'600'}}>{jsonn.age}</span></h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600 profileh6">PassWord</p>
                          <h6 className="text-muted f-w-400">*******</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600 profileh6">Acoount Date</p>
                          <h6 className="text-muted f-w-400">{jsonn.date}</h6>
                        </div>
                      </div>
                      <ul className="social-link list-unstyled m-t-40 m-b-10">
                        <li>
                          <a href="#!" data-toggle="tooltip" data-placement="bottom" title="facebook" data-original-title="facebook" data-abc="true">
                            <i className="mdi mdi-facebook feather icon-facebook" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#!" data-toggle="tooltip" data-placement="bottom" title="twitter" data-original-title="twitter" data-abc="true">
                            <i className="mdi mdi-twitter feather icon-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#!" data-toggle="tooltip" data-placement="bottom" title="instagram" data-original-title="instagram" data-abc="true">
                            <i className="mdi mdi-instagram feather icon-instagram" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      {/* <button style={{border:'none',backgroundColor:'#E91E63',position:'relative',top:'180px',left:'620px'}}><a className='underline-animation' style={{color:'white',fontWeight:'bold',textDecoration:'none'}} href="/">GO TO Home</a></button> */}
        </div>
      </div>
    </>
  );
}
