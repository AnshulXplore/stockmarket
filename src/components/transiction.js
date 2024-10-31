import React, { useEffect, useContext, useState } from 'react';
import stockContext from "./stockContext";
// import './style/transiction.css';
import SecondNav from './secondnav';
import styles from './trans.module.css';
import { Link } from 'react-router-dom';
import Spinner from './loading';



export default function Transiction(props) {
    const [reasult, setreasult] = useState("");
    const[amount,setamount]=useState(0);
    const[loading,setloading]=useState(true);
    const a = useContext(stockContext);

    useEffect(() => {
        document.body.style.overflow='auto'
        const fetchdata = async () => {
            const data = await fetch('https://stockmarketbackend-4.onrender.com/payment/getdetail', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'auth-token': a.jwtToken }
            });
            setloading(true)
            const response = await data.json();
            setloading(false);
            setreasult(response);
            setamount(response.amount);
            console.log(response)
        };
        fetchdata();
        console.log(reasult)
    }, [a.jwtToken]);


if(!reasult.msg && reasult!=""){ // yeha pe dono condition isliye lagayi kyukli pehle reasult ki value empty string hai or sabse pehle return function chlta hai to agar hum reasult!="" ye lagate to ye galat hota to ye isko andar nahi jaane deta par avgar return ke baad jab useeffect run hota or reasult ke andat koi value nahi aati or hum api se koi value na aane par bhej rhe hai no history found to ye ab if condition true ho jaati or object.value ek string ko object main kaise convert karega to ye error deta or jab akele !reasult.msg likhte to iski pehle return function ke saatrh hi error de deta kyu pehle iski value empty string hai or onject.values ek empty struing ke liye error deta isliye && lagana jaruri hai or || ye bhi use nahi karsakte kyuki pehle ye ek check karta empty string or baad main message aa jata to ye error deta theek kyuki msg ek string hai or agar shru main msg likhta kuch is type se  (!reasult.msg || reasult!="" to ek true hoti or par abhi to ye empty string hai to phir object.values empty string ke liye error deta theek isliye && jaruri hai.,
    return  (
        <>
            <SecondNav home={'Stocks And Performance'} backColor={'rgb(11 7 62 / 81%)'} textColor={'white'} hoverColor={'pink'}/>
        


    <div style={{backgroundColor:'#222',height:'100vh',width:'100vw',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <div  className={`${styles.wrapper} ${styles.rounded}`}>
            <nav className={`${styles.navbar} navbar-expand-lg navbar-dark ${styles.dark} d-lg-flex align-items-lg-start`}>
                <a className={`navbar-brand ${styles.navbarBrand}`} href="#">Transactions
                    <p className={`text-muted pl-1 ${styles.navbarBrandText}`}>Welcome to your transactions</p>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className={`navbar-nav ml-lg-auto ${styles.navbarNav}`}>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navItemIcon}`} href="#">
                                <span className="fa fa-bell-o font-weight-bold"></span> 
                                <span className={styles.notify}>Notifications</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#"><span className="fa fa-search ${styles.navItemSearch}"></span></a>
                            <input type="search" className={styles.dark} placeholder="Search"/>
                        </li>
                    </ul>
                </div>
            </nav>
            
            <div className="row mt-2 pt-2">
                <div className={`col-md-6 ${styles.income}`} id="income">
                    <div className="d-flex justify-content-start align-items-center">
                        <p className={`fa fa-long-arrow-down ${styles.faLongArrowDown}`}></p>
                        <p className={`text ${styles.text} mx-3`}>Balance</p>
                        <p  className={`text-white ${styles.money} ml-4`}>${amount}</p>
                    </div>
                </div>
                <div className="col-md-6">
                    
                </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center mt-3">
                <ul className={`nav nav-tabs w-75 ${styles.navTabs}`}>
                    <li className="nav-item">
                        <a className={`nav-link active ${styles.navTabsItem} ${styles.navTabsItemActive}`} href="#history">History</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${styles.navTabsItem}`} href="#">Reports</a>
                    </li>
                </ul>
                <button className="btn btn-primary"><Link style={{textDecoration:'none'}} to='/funds'>New Transaction </Link> </button>
            </div>

            <table className={`table table-dark ${styles.tableDark} mt-3`}>
                <thead>
                    <tr>
                        <th className={styles.tableHeadTh}>Card</th>
                        <th className={styles.tableHeadTh}>MODE</th>
                        <th className={styles.tableHeadTh}>Date</th>
                        <th  className={`${styles.tableHeadTh} `}><span className={styles.margin}>Amount</span> </th>
                    </tr>
                </thead>
                <tbody>
                {Object.values(reasult.allPayment).map((e, index) => (
                        <tr>
                            <td scope="row">
                                <span class="fa fa-briefcase mr-1"></span> {e.card}
                            </td>
                            <td><span class="fa fa-cc-visa"></span></td>
                            <td class="text-muted">{e.Date}</td>
                            <td class="d-flex justify-content-end align-items-center">
                            <span class="fa fa-long-arrow-up mr-1"></span> ${e.enteramount}
                            </td>
                        </tr>
))}
                </tbody>
            </table>
            
            <div className="d-flex justify-content-between align-items-center mt-3">
                <span className={styles.resultsSpan}>Showing 1-10 of 50 results</span>
                <nav aria-label="Page navigation">
                    {/* <ul className="pagination">
                        <li className={`page-item ${styles.paginationDisabled}`}>
                            <a className="page-link" href="#" aria-disabled="true">Previous</a>
                        </li>
                        <li className="page-item">
                            <a className={`page-link ${styles.paginationLink}`} href="#">1</a>
                        </li>
                        <li className="page-item">
                            <a className={`page-link ${styles.paginationLink}`} href="#">2</a>
                        </li>
                        <li className="page-item">
                            <a className={`page-link ${styles.paginationLink}`} href="#">3</a>
                        </li>
                        <li className="page-item">
                            <a className={`page-link ${styles.paginationLink}`} href="#">Next</a>
                        </li>
                    </ul> */}
                </nav> 
            </div>
        </div>
        </div>
    );


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

            <h4 style={{display:'flex',alignContent:'center',justifyContent:'center',position:'relative',top:'280px'}}>No Payment History Found </h4>
            <button style={{border:'none',backgroundColor:'#E91E63',position:'relative',top:'280px'}}><Link className='underline-animation' style={{color:'white',fontWeight:'bold',textDecoration:'none'}} to="/">GO TO Home</Link></button>
            </div>
        </>
    )
}
}
