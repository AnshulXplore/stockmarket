import React, { useState } from 'react';
import StockContext from './stockContext';

const StockState = (props) => {

    let shareObj = {
        NHPC: 0,
        BHEL: 0,
        IRFC: 0,
        IFCI: 0,
        TATA: 0,
        YES: 0,
        CDSL: 0,
        MORPEN: 0,
        ASHOK: 0,
        JP: 0,
        SOUTH: 0,
      };
  let sharearr = [];
  let namearr = [];
  let buyarr = [];
  let sellarr = [];
  let Color = [];                  

  const [arrshare, setarrshare] = useState(sharearr);
  const [arrname, setarrname] = useState(namearr);
  const [arrbuy, setarrbuy] = useState(buyarr);
  const [arrsell, setarrsell] = useState(sellarr);
  const [color, setcolor] = useState(Color);
  const [myobj, setMyObj] = useState(shareObj);
  const [numberOfShare, setNumberofShare] = useState("0");
  const [nameOfShare, setnameOfShare] = useState("");
  const [buyPrice, setbuyPrice] = useState("");
  const [currentPrice, setcurrentPrice] = useState("");
  const [avalaibleAmount, setavaliableAMount] = useState(0);
  const [isLoginButton, setisLoginButton] = useState(false);
  const [jwtToken, setJwtToken] = useState('');
  const[onesharenum,setsharenum]=useState(0);
  

  const setorder = (share, name, buy, sell, i, color) => {
    setarrshare((prev) => {
      const newArr = [...prev];
      newArr[i] = share;
      return newArr;
    });
    function setProgress(item) {
      setProgress(item);
    }
    // spread directly not using a variable jab bhi hum variable ka use nahi karke store karte hai to ye hame jo prev =>({   yeha pe ek '(' ye baala braket khatam karna hota hai or koi bhi value return nahi karni hoti hai or ek cheej dekho hum jab bhi hamare pass array hota hai to hum use 'arr[1]' aise likhte hai par yeha oe hum seedha index dete hai bas aur agar obj hota to hum agar variable ka use karte tio aise set karna hot myobj[key]= par yeha pe seedha [key]  bas set kardo theek
    setarrname((prev) => ({
      ...prev,
      [i]: name,
    }));
    // yeha pe humne humne variable ko use karke kiya hai return jaruri ko brakcket khatma
    setarrbuy((prev) => {
      const newArr = [...prev];
      newArr[i] = buy;
      return newArr;
    });

    setarrsell((prev) => {
      const newArr = [...prev];
      newArr[i] = sell;
      return newArr;
    });
    setcolor((prev) => {
      const newArr = [...prev];
      newArr[i] = color;
      return newArr;
    });
  };
  const setAllData = (sharenum, sharename, buyprice, currentPrice) => {
    setNumberofShare(sharenum);
    console.log("ststae" + numberOfShare);
    setnameOfShare(sharename);
    setbuyPrice(buyprice);
    setcurrentPrice(currentPrice);
  };
  const host="http://localhost:4000";
  const addStock=async (forpath,name,open,close)=>{
  const response=await fetch(`${host}//userdetail/addstock`,{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjU1MDM5NWU0NWNmZDZjMGE3OGM1NGQiLCJpYXQiOjE3MTcwOTMzNDR9.xz6Za5lNIvSwLxPdO9iiLnioBxWL50x8bM05JhCXzQo"},
      body:JSON.stringify({forpath,name,open,close})
    })
    console.log(response);
     
}
  const getStock=async (forpath,name,open,close)=>{
  const response=await fetch(`${host}/userdetail/getstock/66572dba728eebbcbdb26609`,{
    method:'GET',
    headers:{
      'Content-Type':'application/json',
      "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjU1MDM5NWU0NWNmZDZjMGE3OGM1NGQiLCJpYXQiOjE3MTcwOTMzNDR9.xz6Za5lNIvSwLxPdO9iiLnioBxWL50x8bM05JhCXzQo"},
      
    })
    const json=await response.json()
    console.log(json);
     
}

  const states = {
    arrshare,
    arrname,
    arrbuy,
    arrsell,
    color,
    myobj,
    numberOfShare,
    currentPrice,
    buyPrice,
    nameOfShare,
    avalaibleAmount
    
  };

  return (
    <StockContext.Provider value={{ setorder, states ,setAllData,setMyObj,myobj, setavaliableAMount,addStock,getStock,setisLoginButton,isLoginButton,jwtToken,setJwtToken ,onesharenum,setsharenum}}>
      {props.children}
    </StockContext.Provider>
  );
};

export default StockState;
