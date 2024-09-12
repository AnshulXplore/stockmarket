import React, { useEffect, useContext, useState } from 'react';
import stockContext from "./stockContext";
import './style/transiction.css';
import SecondNav from './secondnav';
import Spinner from './loading';

import { Link } from 'react-router-dom';

export default function Portfolio(props) {
    // const [reasult, setreasult] = useState("");
    const[amount,setamount]=useState(0);
    const a = useContext(stockContext);
    const [reasult, setreasult] = useState("");
    const[income,setIncome]=useState(0);
    const [loading,setloading]=useState(true);
    

    useEffect(() => {
        document.body.style.overflow='auto'
        const fetchdata = async () => {
            const data = await fetch('https://stockmarketbackend-3.onrender.com/userdetail/totalsharedetail', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'auth-token': a.jwtToken }
            });
            setloading(true);
            const response = await data.json();
            setloading(false);
            setreasult(response);
            // setamount(response.amount);
            console.log(response)

            response.map((e)=>{

                if(e.number===0){

                }
                else{
                console.log(a.myobj[e.name])
                let totalincome=a.myobj[e.name]-e.average;
                
                totalincome=totalincome*e.number
                setIncome(income=>income+totalincome)
                setamount(amount=>e.amount+amount)
                // console.log(e.amount)
                }
            })
            
        };
        fetchdata();



        
    }, [a.jwtToken]);

   

    if(reasult && reasult.length>0){
        return (
            <>
                <SecondNav home={'Stocks And Performance'} backColor={'rgb(11 7 62 / 81%)'} textColor={'white'} hoverColor={'pink'}/>
                <div  className="wrapper rounded maindiv">
                    <nav id='ordernav' className="navbar navbar-expand-lg navbar-dark dark d-lg-flex align-items-lg-start">
                        <a className="navbar-brand" href="#!">Portfolio
                            <p className="text-muted pl-1">Welcome to your Portfolio</p>
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
                                <p className="text mx-3">Income</p>
                                <p style={{color:income<0 ? 'red':'green'}} className=" ml-4 money">{income.toFixed(2)}</p>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex justify-content-md-end align-items-center">
                                <div className="fa fa-long-arrow-up"></div>
                                <div className="text mx-3">Amount</div>
                                <div className="text-white ml-4 money">${amount}</div>
                            </div>
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
                                    <th id='sharename' className='orderth' scope="col-6">Stock Name</th>
                                    <th id='buyprice' className='orderth' scope="col-6">Qunatity</th>
                                    <th id='date' className='orderth' scope="col-6">Investment Amount</th>
                                    <th id='sharenumber' className='orderth' scope="col">Market Price</th>
                                    <th  className='orderth' id='orderhh1'  scope="col">Avg Price</th>
                                    <th  className='orderth' id='orderth2'  scope="col">Profit/Loss</th>
                                </tr>
                            </thead>
                            <tbody>
                            {reasult.map((e, index) => (
                            e.number !== 0 ? (
                                (() => {
                            let incomee = a.myobj[e.name] - e.average;
                            incomee = incomee * e.number;
                            return (
                                <tr key={index}>
                                    <td id='v1' scope="row"> <span className="fa fa-briefcase mr-1"></span> {e.name} </td>
                                    <td id='v2'><span className="fa fa">{e.number}</span></td>
                                    <td id='v3' className="">{e.amount}</td>
                                    <td id='v4' className="">{a.myobj[e.name] ? Math.round(a.myobj[e.name]*100)/100 : 'api limit'}</td>
                                    <td id='v5' className="">{e.average ? e.average.toFixed(2) : e.average}</td>
                                    <td id='v6' style={{color:incomee<0 ? 'red' : 'green'}} className="">{incomee.toFixed(2)}</td>
                                </tr>
                            );
                        })()
                    ) : null
                ))}

    
                            
                            </tbody>
                        </table>
    
                    </div>
                         {reasult.map((e, index) => (

                        e.number !== 0 ? (
                         (() => {
                            return (
                            <div  id='mobilediv1'>
                                <div id='mobilediv2'>
                                <h3 id='mobilename'>{e.name}</h3>
                                <h3 id='tempact'>AVG</h3>
                                <h3 id='mobileamount'>${e.amount}</h3>
                                </div>
                                <div id='mobilediv3'>
                                    <h3 style={{color:'white'}} id='mobilenumber'>{e.number}  X</h3>
                                    <h3 style={{marginLeft:'50px'}} id='mobileaction'>{e.average.toFixed(2)}</h3>
                                    <h3 id='mobilebuyprice'>LTP ${Math.round(a.myobj[e.name]*100)/100} </h3>
                                </div>
    
                            </div>
                         )
                        })()
                    ) : null
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

    
        
    


