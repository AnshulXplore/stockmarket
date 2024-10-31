import React, { useState , useContext, useEffect} from 'react'
import './style/payment.css'
import Secondnav from './secondnav'
import stockContext from "./stockContext";
import Alert from './Alert'
export default function Payment() {
  const[isAlert,setAlert]=useState(false);
  const[error,seterror]=useState("");
  const[enteramount,setamount]=useState();
  const a=useContext(stockContext);
  const[card,setcard]=useState(0);

  useEffect(()=>{
    document.body.style.overflow='auto'
  },[])
  const handleclick3 = async () => {
    // Pahle check karein ki Razorpay SDK load hua hai ya nahi
    if (typeof window.Razorpay === "undefined") {
        alert("Razorpay SDK is not loaded. Please check your internet connection or script tag.");
        return;
    }

    try {
        // Server se order data fetch kar rahe hain
        const response = await fetch('http://localhost:5000/create-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: 500 }) // amount in INR (500 rupees)
        });

        if (!response.ok) {
            throw new Error("Order creation failed on the server.");
        }

        const orderData = await response.json();

        // Razorpay options configure karna
        const options = {
            key: 'rzp_live_iUBga0IbSkxXNc', // Aapka Razorpay key_id
            amount: orderData.amount, // Amount in paisa (multiply rupees by 100)
            currency: "INR",
            name: "Anshul Kankane Coder",
            description: "ProCoder",
            order_id: orderData.id, // Razorpay order ID from server response
            handler: async function (response) {
                // Payment verification ke liye response ko server pe bhejna
                const verificationResponse = await fetch('http://localhost:5000/payment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(response),
                });

                const verificationMessage = await verificationResponse.text();
                alert(verificationMessage);
            },
            prefill: {
                name: "Customer Name",
                email: "customer@example.com",
                contact: "9999999999"
            },
            theme: {
                color: "#3399cc"
            }
        };

        // Razorpay instance initialize karna aur open function se checkout open karna
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    } catch (error) {
        console.error("Error occurred:", error);
        alert("Something went wrong. Please try again.");
    }
};



  const handleclick1=()=>{
    setamount(prevAmount => prevAmount + 5949);

  }
  const handleclick2=()=>{
    setamount(prevAmount => prevAmount + 3894);

  }
  const onchange=(e)=>{
    setamount(parseInt(e.target.value,10));

  }

  const onchange1=(e)=>{
    setcard(e.target.value);
    
  }
  return (
    <>
    <Secondnav home={'Stocks And Performance'} backColor={'rgb(11 7 62 / 81%)'} textColor={'white'} hoverColor={'pink'}/>
    {isAlert ?  <Alert error={error}/> :''}
    

  <div className=" paymentdiv"  id='paymentmaindic'>
  <div className="card box1 shadow-sm p-md-5 p-4">
    <div className="fw-bolder mb-4">
      <span className="fas fa-dollar-sign"></span>
      <span className="ps-1">599.00</span>
    </div>
    <div className="d-flex flex-column">
      <div className="d-flex align-items-center justify-content-between text">
        <span>Commission</span>
        <span className="fas fa-dollar-sign">
          <span className="ps-1">0.0</span>
        </span>
      </div>
      <div className="d-flex align-items-center justify-content-between text mb-4">
        <span>Total</span>
        <span className="fas fa-dollar-sign">
          <span className="ps-1">599</span>
        </span>
      </div>
      <div className="border-bottom mb-4"></div>
      <div className="d-flex flex-column mb-4">
        <span className="far fa-file-alt text">
          <span className="ps-2">Invoice ID:</span>
        </span>
        <span className="ps-3">SN8478042099</span>
      </div>
      <div className="d-flex flex-column mb-5">
        <span className="far fa-calendar-alt text">
          <span className="ps-2">Next payment:</span>
        </span>
        <span className="ps-3">22 July, 2018</span>
      </div>
      <div className="d-flex align-items-center justify-content-between text mt-5">
        <div className="d-flex flex-column text">
          <span>Customer Support:</span>
          <span>online chat 24/7</span>
        </div>
        <div className="btn btn-primary rounded-circle">
          <span className="fas fa-comment-alt"></span>
        </div>
      </div>
    </div>
  </div>

  <div className="card box2 shadow-sm">
    <div className="d-flex align-items-center justify-content-between p-md-5 p-4">
      <span className="h5 fw-bold m-0">Payment methods</span>
      <div className="btn btn-primary bar">
        <span className="fas fa-bars"></span>
      </div>
    </div>
    <ul className="nav nav-tabs mb-3 px-md-4 px-2">
      <li className="nav-item">
        <a className="nav-link px-2 active" aria-current="page" href="#!">Credit Card</a>
      </li>
      <li className="nav-item">
        <a style={{color:'white',fontWeight:'bold',opacity:'1'}} className="nav-link px-2" href="#!">Mobile Payment</a>
      </li>
      <li className="nav-item ms-auto">
        <a className="nav-link px-2" href="#!">+ More</a>
      </li>
    </ul>
    <div className="px-md-5 px-4 mb-4 d-flex align-items-center">
      <div className="btn btn-success me-4">
        <span className="fas fa-plus"></span>
      </div>
      <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked/>
        <label onClick={handleclick1} className="btn btn-outline-primary" htmlFor="btnradio1">
          <span className="pe-1">+</span>5949
        </label>
        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
        <label onClick={handleclick2} className="btn btn-outline-primary" htmlFor="btnradio2">
          <span className="lpe-1">+</span>3894
        </label>
      </div>
    </div>

    <form action="#">
      <div className="row">
        <div className="col-12">
          <div className="d-flex flex-column px-md-5 px-4 mb-4">
            <span>Credit Card</span>
            <div className="inputWithIcon">
              <input onChange={onchange1} id='credit' className="form-control paymentinput" type="text"/>
              <span className="">
                <img className='paymentimg' src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png" alt=""/>
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4">
            <span>Expiration<span className="ps-1">Date</span></span>
            <div className="inputWithIcon">
              <input type="Number" className="form-control paymentinput paymentexpire" />
              <span className="fas fa-calendar-alt"></span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
            <span className='paymentcvvspan'>Code CVV</span>
            <div className="inputWithIcon">
              <input type="password" className="form-control paymentinput paymentcvv"/>
              <span className="fas fa-lock paymentlock"></span>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex flex-column px-md-5 px-4 mb-4">
            <span >Enter Amount Here</span>
            <div className="inputWithIcon">
              <input onChange={onchange} className="form-control text-uppercase paymentinput paymentamount" type="Number" />
              <span className="far fa-user"></span>
            </div>
          </div>
        </div>
        <div className="col-12 px-md-5 px-4 mt-3">
          <div onClick={handleclick3} className="btn btn-primary w-100">Pay ${enteramount ? enteramount :0}</div>
        </div>
      </div>
    </form>
  </div>
</div>

    
    </>
  )
}
