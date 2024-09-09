import './style/share.css'
import React, { useState, useEffect, createContext ,useContext} from 'react';
import Navbar from './navbar';
import Second from './secondnav';
import Buy from './buy';
import { componentDidMount as fetchShareData } from './about';
import { Link } from 'react-router-dom';
import stockContext from "./stockContext";
import Spinner from './loading';
let shareName = null;

export const ResponseContext = createContext();

const SeprateShare = (props) => {
  const a=useContext(stockContext);
  const [arr, setArr] = useState([]);
  const [name, setName] = useState('');
  const [isopen, setIsOpen] = useState(false);
  const [Action, setAction] = useState('BUY');
  const [arrowState, setArrowState] = useState(1);
  const[isSell,setIsSell]=useState(false);
  const[onesharenum,setsharenum]=useState(0);
  const[loading,setloading]=useState(true);
  

  const setmyContext = (res) => {
    setIsOpen(res);
  };

  const setResponse = (response) => {
    setIsOpen(response);
    return isopen;
  };

  const handleOnClick = () => {
    setIsOpen(true);
    setAction('BUY');
  };

  const handle = () => {
    setIsOpen(false);
    setAction('BUY');
  };

  const sellHandle = () => {
    setIsOpen(true);
    setAction('SELL');
  };
  const manageWatchList = () => {
   a.getStock(name,name,40,50);
  };
 
  const joker = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow='auto'
    const fetchData = async () => {
      props.setProgress(10);
      let shareData = await fetchShareData(props.name);
      props.setProgress(50);
      let data = [shareData];
      setArr(data);
      props.setProgress(70);
      setName(props.name);
      props.setProgress(100);
      //  if(this.state.arr.length>0){

  //  let difference=parseInt(this.state.arr[0][1]-this.state.arr[0][2])
  //  console.log('diff'+difference)
  //  let averageLength=500/difference;
  //  console.log('avragelength'+averageLength)
  //  let close=parseInt(this.state.arr[0][3]-this.state.arr[0][2]);
  //  console.log('colse'+close)
  //  let finalCal=close*averageLength;
  //  console.log('final'+finalCal);
  //  this.setState({arrowState:finalCal+19});
  //  console.log(this.state.arrowState);
  // }
    };

    fetchData();
  }, []);

  useEffect(()=>{
    const fetchTotalNumOfShare=async()=>{
      const data = await fetch('https://stockmarketbackend-3.onrender.com/userdetail/onesharedetail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'auth-token': a.jwtToken },
        body:JSON.stringify({shareName:props.name})
    });
    setloading(true)
    const response = await data.json();
    setloading(false);
    console.log(response)
    if(response){
    if(response>0){
      setIsSell(true); 
      setsharenum(response);
    }
    else{
      setIsSell(false);
    }
  }
    
    }
    fetchTotalNumOfShare();
  },[])

  const normal = {
    backgroundColor: '#fff',
    height: '30px',
    width: '40px',
    border: '1px solid #e0e0ec',
    borderRadius: '4px',
    alignContent: 'center',
    transition: 'all .25s ease-in-out',
    cursor: 'pointer'
  };
  const hover = {
    border: '1px solid blue'
  };
  const handleMouseEnter = (e) => {
    const mergedStyle = { ...normal, ...hover };
    Object.assign(e.target.style, mergedStyle);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.target.style, normal);
  };

  const {
    fullName,
    keyName,
    avaliableMoney,
    amountSet,
    setindex,
    index,
    setProgress,
  } = props;

  setProgress(0);

  shareName = name;

  if (arr.length > 0) {

    
    return  (
        <>
        <ResponseContext.Provider value={{ setmyContext }}>
          {isopen && Action === 'BUY' ? (
            <div className='sharediv1' >
              {isopen ? (
                <Buy Index={index} setIndex={setindex} amountSetter={amountSet} avaliableAmount={avaliableMoney} keyname={keyName} currentPrice={arr[0] ?Math.round(arr[0][3]*100)/100 : 45} name={name} shareprice={'400'} Action={Action} shareNumber={onesharenum}/>
              ) : null}
            </div>
          ) : (
            <div className='sharediv1' >
              {isopen ? (
                <Buy Index={index} setIndex={setindex} avaliableAmount={avaliableMoney} price={'50'} keyname={keyName} Action={Action} currentPrice={arr[0] ?Math.round(arr[0][3]*100)/100 : 45} name={name} shareprice={'400'} shareNumber={onesharenum}/>
              ) : null}
            </div>
          )}
        </ResponseContext.Provider>

          <div id='sharediv2'  style={{ position: 'relative',bottom: isopen ? '480px' : '0px',overflowX: 'hidden',opacity: isopen ? '0.5' : '1',pointerEvents: isopen ? 'auto' : 'auto'}}>
          <Navbar />
          <Second home={"HOME"} backColor={'#21b7a8'} textColor={'black'} hoverColor={'blue'} />
          <div  id='sharediv3'>
            <div id='sharediv4' >
              
              <Link  to='/' className='mx-3 my-2 sharelink1' >Home</Link>
              <Link  to="/" className='mx-3 my-2 sharelink1' >All Stocks</Link>
              <p id='sharep1' className='mx-3 my-2'>{name}</p>
              <i className="fa-sharp fa-solid fa-plus" onClick={manageWatchList}></i>
            </div>
            <div id='sharediv5' >
              <h1 id='shareh11' className='mx-3' >{name} Share Price Live</h1>
              <button id='sharebutton1' className='my-1' >NSE</button>
              <span className='mx-3' style={normal} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></span>
            </div>
            <h5 id='shareh51' className='mx-3' >{name}</h5>
            <h5 id='shareh52' className='mx-3 ' >Large Cap  |  IT - Software</h5>
            <div id='sharediv6' className='mx-3'>
              <h3>₹{arr[0] ? Math.round(arr[0][3]*100)/100:'Limit hit'}</h3>
              <button id='sharebutton2' className='mx-3'  onClick={handleOnClick}>BUY</button>
              <button id='sharebutton3' disabled={isSell===true ? false : true} className='' style={{opacity: isSell === false ? '0.5' : '1' }} onClick={sellHandle}>SELL</button>
            </div>
            <div id='sharediv7' className='mx-3 my-2'>
              <p id='sharep12' className='mx-3 my-1' >Price as of 30 Apr 2024 15:14 .  <Link to="/" style={{ textDecoration: 'none' }}>Log in</Link> to view Live prices</p>
            </div>
            <h2 className='mx-3 my-1'>{fullName} Performance</h2>
            <h5 className='mx-3 my-4' style={{ color: '#777d87' }}>Days Range</h5>
            <div id='sharediv8' className='mx-3 my-2'>
              <p id='shareunique2'  style={{ color: '#2a394e', fontWeight: 'bold' }}>Low:₹{arr[0] ? Math.round(arr[0][2]*100)/100:'Limit hit'}</p>
             
              <p id='sharep13' className='my-3 mx-1'></p>
              <p id='shareunique' style={{ color: '#2a394e', fontWeight: 'bold'}}>High:{arr[0] ? Math.round(arr[0][1]*100)/100:'Limit hit'}</p>
            </div>
            <div>
              <div id='sharediv9'>
                <table id='sharetable' className='table' style={{backgroundColor: '#e0e0ec' }}>
                  <tbody>
                    <tr>
                      <td style={{color:'#777d87'}} className='sharetd' >Open</td>
                      <td id='sharetd2' style={{ fontWeight: 'bold', color: 'black'}}>{arr[0] ? Math.round(arr[0][0]*100)/100 : 'Limit hit'}</td>
                    </tr>
                    <tr>
                      <td style={{color:'#777d87'}} className='sharetd' >Close</td>
                      <td id='sharetd3' style={{ fontWeight: 'bold', color: 'black'}}>{arr[0] ? Math.round(arr[0][3]*100)/100:'Limit hit'}</td>
                    </tr>
                    <tr>
                      <td style={{color:'#777d87'}} className='sharetd' >Volume</td>
                      <td id='sharetd4' style={{ fontWeight: 'bold', color: 'black' }}>{arr[0] ? Math.round(arr[0][4]*100)/100:'Limit hit'}</td>
                    </tr>
                  </tbody>
                </table>
                <table id='sharetable2' className='table mx-3' style={{ backgroundColor: '#e0e0ec' }}>
                  <tbody>
                    <tr>
                      <td style={{color:'#777d87'}} className='sharetd' >Low</td>
                      <td id='sharetd5' style={{ fontWeight: 'bold', color: 'black'}}>{arr[0] ? Math.round(arr[0][2]*100)/100:'Limit hit'}</td>
                    </tr>
                    <tr>
                      <td style={{color:'#777d87'}} className='sharetd' >High</td>
                      <td id='sharetd6' style={{ fontWeight: 'bold', color: 'black'}}>{arr[0] ? Math.round(arr[0][1]*100)/100:'Limit hit'}</td>
                    </tr>
                    <tr>
                      <td style={{color:'#777d87'}} className='sharetd' >Volume</td>
                      <td id='sharetd7' style={{ fontWeight: 'bold', color: 'black'}}>1725274</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return( 
    <>
    <Navbar />
  <Spinner/>
    </>
  );
};

export default SeprateShare;


