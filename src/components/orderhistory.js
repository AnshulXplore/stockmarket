import React, { useEffect, useContext, useState } from 'react';
import stockContext from "./stockContext";
import './style/transiction.css';
import SecondNav from './secondnav';
import { Link } from 'react-router-dom';
import Spinner from './loading';


export default function Transiction(props) {
    // const [reasult, setreasult] = useState("");
    const[amount,setamount]=useState(0);
    const a = useContext(stockContext);
    const [reasult, setreasult] = useState("");
    const[loading,setloading]=useState(true)

    useEffect(() => {
        document.body.style.overflow='auto'
        const fetchdata = async () => {
            const data = await fetch('https://stockmarketbackend-4.onrender.com/userdetail/getdetail', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'auth-token': a.jwtToken }
            });
            setloading(true)
            const response = await data.json();
            setloading(false)
            setreasult(response);
            // setamount(response.amount);
            console.log(response)

          
        };
        fetchdata();
        if(reasult.length>0){
            reasult.map((e) => {
                setamount(amount=>amount+e.amount)
           })
        }
           
            
        
    }, [a.jwtToken]);

    
        
    
    


if(reasult && reasult.length>0){
    return (
        <>
            <SecondNav home={'Stocks And Performance'} backColor={'rgb(11 7 62 / 81%)'} textColor={'white'} hoverColor={'pink'}/>
            <div className="wrapper rounded maindiv">
                <nav id='ordernav' className="navbar navbar-expand-lg navbar-dark dark d-lg-flex align-items-lg-start">
                    <a className="navbar-brand" href="#!">Order History
                        <p className="text-muted pl-1">Welcome to your Order History</p>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-lg-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#!"><span className="fa fa-bell-o font-weight-bold"></span> <span className="notify">Notifications</span> </a>
                            </li>
                            <li className="nav-item">
                                <a href="#!"><span className="fa fa-search"></span></a>
                                <input type="search" className="dark" placeholder="Search" />
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="row mt-2 pt-2">
                    <div className="col-md-6" id="income">
                        <div className="d-flex justify-content-start align-items-center">
                            <p className="fa fa-long-arrow-down"></p>
                            <p className="text mx-3">Invested Amount</p>
                            <p className="text-white ml-4 money">${amount}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-3">
                    <ul className="nav nav-tabs w-75">
                        <li className="nav-item">
                            <a className="nav-link active" href="#history">History</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#!">Reports</a>
                        </li>
                    </ul>
                    <button id='orderbtn' className="btn btn-primary">New Transaction</button>
                </div>

                <div   className="table-responsive mt-3 ordertablediv">
                    <table  id='ordertable' className=" table-dark table-borderless">
                        <thead id='orderthead'>
                            <tr>
                                <th id='sharename' className='orderth' scope="col-6">ShareNAme</th>
                                <th id='buyprice' className='orderth' scope="col-6">BuyPrice</th>
                                <th id='date' className='orderth' scope="col-6">Date</th>
                                <th id='sharenumber' className='orderth' scope="col">ShareNumber</th>
                                <th  className='orderth' id='orderhh1'  scope="col">Action</th>
                                <th  className='orderth' id='orderth2'  scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reasult.map((e, index) => (
                                
                                <tr >
                                    <td id='v1' scope="row"> <span className="fa fa-briefcase mr-1"></span> {e.shareName} </td>
                                    <td id='v2'><span className="fa fa">{e.buyPrice}</span></td>
                                    <td id='v3' className="">{e.Date}</td>
                                    <td id='v4' className="">{e.shareNumber}</td>
                                    <td id='v5'  className="">{e.action}</td>
                                    <td id='v6'  className="">
                                        {/* <span className="fa fa-long-arrow-up mr-1"></span> */}
                                        {e.amount}
                                    </td>
                                </tr>

                            ))}
                        </tbody>
                    </table>

                </div>
                     {reasult.map((e, index) => (
                        <div id='mobilediv1'>
                            <div id='mobilediv2'>
                            <h3 id='mobilename'>{e.shareName}</h3>
                            <h3 id='tempact'>Action</h3>
                            <h3 id='mobileamount'>${e.amount}</h3>
                            </div>
                            <div id='mobilediv3'>
                                <h3 id='mobilenumber'>{e.shareNumber}  X</h3>
                                <h3 id='mobileaction'>{e.action}</h3>
                                <h3 id='mobilebuyprice'>${e.buyPrice}</h3>
                            </div>

                        </div>
                     ))}

                <div className="d-flex justify-content-between align-items-center results">
                    {/* <span className="pl-md-3">Showing<b className="text-white"> {reasult.allPayment.length} 0f {reasult.allPayment.length} </b> transactions</span> */}
                    <div className="pt-3">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#!" aria-label="Previous">
                                        <span aria-hidden="true">&lt;</span>
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#!" aria-label="Next">
                                        <span aria-hidden="true">&gt;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
else{
    return loading ? (
        <>
         <SecondNav home={'Stocks And Performance'} backColor={'rgb(11 7 62 / 81%)'} textColor={'white'} hoverColor={'pink'}/>
        <Spinner />
        </>
      ) : (
      
        <>
        <SecondNav home={'Stocks And Performance'} backColor={'rgb(11 7 62 / 81%)'} textColor={'white'} hoverColor={'pink'}/>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100vw',flexDirection:'column'}}>

<h4 style={{display:'flex',alignContent:'center',justifyContent:'center',position:'relative',top:'280px'}}>No Stock History Found </h4>
<button style={{border:'none',backgroundColor:'#E91E63',position:'relative',top:'280px'}}><Link className='underline-animation' style={{color:'white',fontWeight:'bold',textDecoration:'none'}} to="/">GO TO Home</Link></button>
</div>
        
        </>
    )
}
}

    
        
    


