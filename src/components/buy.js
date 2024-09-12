// import {  useNavigate  } from 'react-router-dom';
import './style/buy.css'

import { useContext, useEffect, useState } from "react";
import { ResponseContext } from "./seprateshare";
import stockContext from "./stockContext";
import Alert from './Alert'
const Buy = (props) => {

  const a=useContext(stockContext);
  const response = useContext(ResponseContext);
  const [amount, setamount] = useState(0);
  const [getamount,setup]=useState(0);
  const [enableButton, setButton] = useState(false);
  const [validForSell, setvalidForSell] = useState(true);
  const[sharenum,setsharenum]=useState(0);
  const[error,seterror]=useState("");
  const [isAlert,setAlert]=useState(false);
  // let previousCountOfShare = parseInt(a.states.myobj[props.name]);
  // const[index,setindex]=useState(0);
  

  const handle = () => {
    response.setmyContext(false);
  };

  const handle2 = async() => {

    const data = await fetch('https://stockmarketbackend-3.onrender.com/payment/getdetail', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'auth-token': a.jwtToken }
  });
  const response = await data.json();
  // setreasult(response);
   setup(response.amount);
   console.log(response.amount)
   const input = parseInt(document.getElementById("buyinput3").value, 10);
   const input4 = parseInt(document.getElementById("buyinput4").value, 10);

if(props.Action==='BUY'){
    if(response.amount>=input4){
    const addstock=await fetch('https://stockmarketbackend-3.onrender.com/userdetail/addstock',{
      method:'POST',
      headers:{ 'Content-Type': 'application/json','auth-token':a.jwtToken},
      body:JSON.stringify({shareName:props.name,buyPrice:props.currentPrice ? Math.round(props.currentPrice*100)/100 :100,action:props.Action,shareNumber:input,amount:input4})
  })
  console.log(props.currentPrice)

  const updateamount=await fetch('https://stockmarketbackend-3.onrender.com/payment/updatefund',{
    method:'PUT',
    headers:{ 'Content-Type': 'application/json','auth-token':a.jwtToken},
    body:JSON.stringify({action:props.Action,price:input4})

})



  const json=await addstock.json();
  setsharenum(json.update)
  const json1=await updateamount.json();

  
}
else{
  seterror("You have not a money please add some cash");
  setAlert(true)
          setTimeout(() => {
            setAlert(false);
          }, 3000);
        
  
}
}

else{
  let input = parseInt(document.getElementById("buyinput3").value);
  console.log(sharenum,input)
  if(sharenum<input){
    seterror("You have not a share please add some share");
  setAlert(true)
          setTimeout(() => {
            setAlert(false);
          }, 3000);
  
  }
  else{
  const sellStock=await fetch('https://stockmarketbackend-3.onrender.com/userdetail/updatestock',{
    method:'PUT',
    headers:{ 'Content-Type': 'application/json','auth-token':a.jwtToken},
    body:JSON.stringify({shareName:props.name,buyPrice:props.currentPrice ? Math.round(props.currentPrice*100)/100 :100,action:props.Action,shareNumber:input,amount:input4})
})


const updateamount=await fetch('https://stockmarketbackend-3.onrender.com/payment/updatefund',{
  method:'PUT',
  headers:{ 'Content-Type': 'application/json','auth-token':a.jwtToken},
  body:JSON.stringify({action:props.Action,price:input4})
})


  const oneStockTotalNumber = await fetch('https://stockmarketbackend-3.onrender.com/userdetail/onesharedetail', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'auth-token': a.jwtToken },
    body:JSON.stringify({shareName:props.name})
});
const json=await sellStock.json();
const response = await oneStockTotalNumber.json();
console.log("total share"+response)





const json1=await updateamount.json();
setsharenum(response)
console.log("response"+response);
console.log('sell'+json)
}
}

  }


  const handleOnChange = () => {
    let input = document.getElementById("buyinput3").value;
    let input1 = parseInt(document.getElementById("buyinput3").value*props.currentPrice);
    setamount(input1);
    
     if(input&&input1){
      if(input<0){

      }
      else{
      setButton(true)
      }
     } 
     else{
      setButton(false)
     }
    
  };

  useEffect(()=>{
    const fetchTotalNumOfShare=async()=>{
      const data = await fetch('https://stockmarketbackend-3.onrender.com/userdetail/onesharedetail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'auth-token': a.jwtToken },
        body:JSON.stringify({shareName:props.name})
    });
    const response = await data.json();
    setsharenum(response);
  }
  fetchTotalNumOfShare();
  },[])

  // const {order}=name;

  return (
    <>
      {/* <h1>hello{order}</h1> */}
      {isAlert ?  <Alert error={error}/> :''}
      <div id='buymaindiv'>

        <div id="buydiv1" className="mx-3">
          <div id='buydiv2' className="mx-4 my-2" >
          <h3 id='buyh31' className="mx-2 my-4">{props.name} ${props.currentPrice}</h3>
          {/* <h4 id='buyh32' className="my-4 mx-2">${props.currentPrice}</h4> */}
          <h4 id='buyh33' >No.Share={sharenum}</h4>
        </div>
        <div className="mx-4">
          <button id='buybutton1' className="" >Normal</button>
          <button style={{ border: "none", backgroundColor: "#ced4da" }}>Stop Loss</button>
        </div>
        <div  className="mx-3" style={{backgroundColor: "white",width: "97%",height: "67%",borderRadius: "8px 8px ",}}>
          <div id='buyunidiv' className="buy-input-wrapper">
            <h4  className="my-4 buyh41  buycommon">Action</h4>
            <h4 className="my-4 buyh41 buycommon hellog" >Buy Price</h4>
            <h4 className="my-4 buyh42 buycommon">Quantity</h4>
            <h4 className="my-4 buy42 buycommon">Amount</h4>
          </div>
          <div id="buydiv3" className="buy-input-wrapper">
            <input id="buyinput1" className="input" type="text" defaultValue={props.Action} readOnly />
            <input id="buyinput2" className="input" type="text" defaultValue={props.name} readOnly />
            <input id="buyinput3" onChange={handleOnChange} className="input" type="Number" defaultValue={0} />
            <input id="buyinput4" className="input" type="Number" value={amount} readOnly />
          </div>

          <div id="buydiv4" className="my-4">
            <h5 id="buyh51" className="mx-3 my-2">Exchange</h5>
            <h5 id="buyh52" className="my-2">Validity</h5>
            <h5 id="buyh53" className="mx-3 my-2">Product</h5>
          </div>

          <div id="buydiv6">
            <h6 id="buyh61" className="mx-3">NSE</h6>
            <h6 id="buyh62" className="mx-3">DAY</h6>
            <h6 id="buyh63" className="mx-3">DELIVERY</h6>
          </div>

          <div id='buybtndiv'>
           <button id="buybutton1" className="mx-3" onClick={handle}>Cancel</button>


            <button id="buybutton2" disabled={enableButton === true ? false : true} style={{opacity: enableButton === true ? "1" : "0.5",borderRadius: "8px",}} onClick={handle2}> Submit</button>
          </div>
        </div>
      </div>
</div>
    </>
  );
};

Buy.defaultProps = {
  Action: "",
  shareprice: "",
  name: "",
  currentPrice: "",
  keyname: "",
  avaliableAmount: "",
  amountSetter:"",
  Index: "",
  setIndex: "",
};

export default Buy;
