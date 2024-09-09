import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import stockContext from './stockContext';
import './style/mediaquery.css';
import './style/navbar.css';

const SecondNav = (props) => {
  const a = useContext(stockContext);
  const { home, backColor, textColor, hoverColor } = props;

useEffect(()=>{
document.body.style.overflow='auto'
},[])
  const responsivefunction2 = () => {
    let sliding = document.getElementById("slidingbar");
    let signmaindiv=document.getElementById('signmaindiv');
    let signanshulcard=document.getElementById('signanshulcard');
    let loginanshulcard=document.getElementById('loginanshulcard');
    
    
    
      sliding.classList.add('show')
      sliding.style.opacity = '1';
      sliding.style.zIndex=1000
      sliding.style.display = "flex";
      document.body.style.overflow='hidden'
  

  setTimeout(() => {
    if(signmaindiv ){
      signmaindiv.style.opacity = "0";
    }
    if(signanshulcard){
      signanshulcard.style.display='none'
    }
    if(loginanshulcard){
      loginanshulcard.style.display='none'
    }
  }, 500);
  
   
  }
  const crossfunc = () => {
    
    let sliding = document.getElementById("slidingbar");
    let signmaindiv=document.getElementById('signmaindiv');
    let signanshulcard=document.getElementById('signanshulcard');
    let loginanshulcard=document.getElementById('loginanshulcard');
    
    document.body.style.overflow='auto'
  
      if(sliding){
      sliding.classList.remove('show')
    }
    if(signmaindiv){
      signmaindiv.style.opacity='1'
    }
   
         setTimeout(() => {
          if(sliding ){
          sliding.style.opacity = "0";
          }
          if(signanshulcard){
            signanshulcard.style.display='block'
          }
          if(loginanshulcard){
            loginanshulcard.style.display='block'
          }
          
        }, 500); // Match with the CSS transition time
      }

  return (
    <>
    
<div  id='slidingbar' className='box'>
{a.isLoginButton ?  <Link to='/history'>order history</Link> : '' }
{a.isLoginButton ?  <Link to='/portfolio'>Portfolio</Link>   :''}
{a.isLoginButton ?  <Link to='/profile'>Profile</Link> :''}
                    <Link to='/funds'>Add funds</Link>
{a.isLoginButton ?  <Link to='/transiction'>Transiction history</Link> : ''}
        <div id='crosse' onClick={crossfunc}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="white" fill="none">
            <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      
    <div id='secondnav'>
      <nav id='secondnavnav' >
      <div style={{opacity:a.isLoginButton ? '1' : '0'}} id='latna' onClick={responsivefunction2}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#5206f7" fill="none">
    <path d="M4 5L20 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4 19L20 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
        </div>
        <Link to="/" className="mx-3 secondnavlink navlink3">
          {home}
        </Link>
        {a.isLoginButton ?
          <Link to="/history" className="mx-3 secondnavlink secondnavlink2  none">
            Order History
          </Link>
          : ""}
        {a.isLoginButton ? 
        <Link to="/portfolio" className="mx-3 secondnavlink secondnavlink2 none port">
          Portfolio
        </Link>
          :''}

        {a.isLoginButton ?
          <Link to="/funds" className="mx-3 secondnavlink secondnavlink2 none" >
            Add Funds
          </Link>
         : ''} 
        {a.isLoginButton ?
          <Link to="/transiction" className="mx-3 secondnavlink secondnavlink2 none" >
            Transaction History
          </Link>
          : ''}
        <Link to="/signup" className="mx-3 secondnavlink navlink3 " >
          Sign up
        </Link>
        {a.isLoginButton ?
          <Link to="/profile" className="mx-3 secondnavlink secondnavlink2 none" >
            Profile
          </Link>
          : ''}
        {/* <Link to="/login" className="mx-3 secondnavlink " >
          Login
        </Link> */}



      </nav>
    </div>
          </>
  );
};

export default SecondNav;
