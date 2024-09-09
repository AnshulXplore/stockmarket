import React, { useState, useEffect, useContext } from 'react';
import Share from './share';
import Spinner from './loading';
import Second from './secondnav';
import stockContext from "./stockContext";
import './style/mediaquery.css'


const About = ({ setProgress }) => {
  const a=useContext(stockContext)
  const [nhpc, setNhpc] = useState([]);
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow='auto'
    const fetchData = async () => {
      setProgress(0);
      setLoading(true);
      setProgress(50);
      await hello();
      setLoading(false);
      setProgress(100);
    };

    fetchData();
  }, []);

  const hello = async () => {
    let nhpc = await componentDidMount('NHPC');
    let bhel = await componentDidMount('BHEL');
    let irfc = await componentDidMount('IRFC');
    // let south = await componentDidMount('SOUTHBANK');
    // let tata = await componentDidMount('TATAMOTORS');
    // let cdsl = await componentDidMount('CDSL');
    // let morpenlab = await componentDidMount('MOREPENLAB');
    // let ashok = await componentDidMount('ASHOKLEY');
    // let ifci = await componentDidMount('IFCI');
    // let jp = await componentDidMount('JPPOWER');
    // let yesbank = await componentDidMount('YESBANK');
    let newArr = [nhpc, bhel, irfc];
    if(nhpc&& bhel && irfc)
    a.setMyObj({
      "NHPC":nhpc[3],
      "BHEL":bhel[3],
      "IRFC":irfc[3] 
    })

    console.log(a.myobj)
    setArr(newArr);
  };

  return loading ? (
    <Spinner />
  ) : (
    <>
      <Second home={'Stocks And Performance'} backColor={'#21b7a8'} textColor={'black'} hoverColor={'blue'} />
      <div id='aboutdiv1' >
        <table className="table" id='abouttable'>
          <thead>
            <tr>
              <th className='aboutth'  scope="col">#</th>
              <th className='aboutth'  scope="col">Company Name</th>
              <th className='aboutth'  scope="col">OPEN</th>
              <th className='aboutth'  scope="col">CLOSE</th>
              <th className='aboutth'  scope="col">Go</th>
            </tr>
          </thead>
          <tbody>
            <Share forpath={'NHPC'} name={'NHPC'} open={arr[0] ? arr[0][0] : arr[0]} close={arr[0] ? arr[0][3] : arr[0]} row="1" />
            <Share forpath={'BHEL'} name={'BHEL'} open={arr[1] ? arr[1][0] : arr[1]} close={arr[1] ? arr[1][3] : arr[1]} row="2" />
            <Share forpath={'IRFC'} name={'IRFC'} open={arr[2] ? arr[2][0] : arr[2]} close={arr[2] ? arr[2][3] : arr[2]} row="3" />
            <Share forpath={'SOUTHINDIANBANK'} name={'SOUTH INDIAN BANK'} open={arr[3]} close='95' row='4'/>
            <Share forpath={'TATAMOTORS'} name={'TATA MOTORS'} open={arr[4]} close='95' row='5'/>
            <Share forpath={'CDSL'} name={'CDSL'} open={arr[5]} close='95' row='6'/>
            <Share forpath={'MOREPENLABS'} name={'MOREPEN LABS'} open={arr[6]} close='95' row='7'/>
            <Share forpath={'ASHOKLEYLAND'} name={'ASHOK LEYLAND'} open={arr[7]} close='95' row='8'/>
            <Share forpath={'IFCI'} name={'IFCI'} open={arr[8]} close='95' row='9'/>
            <Share forpath={'JPPOWER'} name={'JP POWER'} open={arr[9]} close='95' row='10'/>
            <Share forpath={'YESBANK'} name={'YES BANK'} open={arr[10]} close='95' row='11'/>
            <Share forpath={'NTPC'} name={'NTPC'} open={arr[11]} close='95' row='12'/>
            <Share forpath={'IDEA'} name={'IDEA'} open={arr[12]} close='95' row='13'/>
            <Share forpath={'TATASTEEL'} name={'TATASTEEL'} open={arr[13]} close='95' row='14'/>
            <Share forpath={'SUZLON'} name={'SUZLON'} open={arr[14]} close='95' row='15'/>
            {/* Add more shares here as needed */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export const fetchData = async (name) => {
  const API_KEY = 'NDK4DZ597Z4TG6B';
  let url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${name}.BSE&outputsize=full&apikey=${API_KEY}`;
  let response = await fetch(url);
  let data = await response.json();
  return data;
};

export const componentDidMount = async (shareName) => {
  try {
    let stockData = await fetchData(shareName);
    if (stockData && stockData['Time Series (Daily)']) {
      let timeSeries = stockData['Time Series (Daily)'];
      let openValues = Object.values(timeSeries);
      if (openValues.length > 0 && openValues[0]['1. open']) {
        let open = openValues[0]['1. open'];
        let high = openValues[0]['2. high'];
        let low = openValues[0]['3. low'];
        let close = openValues[0]['4. close'];
        let volume = openValues[0]['5. volume'];
        return [open, high, low, close, volume];
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default About;


// javascript main yadi kise function ko hum async banate hai or usme jaha par bhi await lagate hai to jab tak bo pure await complete nahi ho jaate tab tak uske aage ka kaam nahi hota jaise async  example :-

/*async function dosomething(){
   console.log(' radhe radhe');
   let timeout = settimeout(()=>{
           console.log('timeout)
   },5000)
   let a =await  timeout;
   console.log('function end')
}
output like this = radhe radhe
                   5sec wait and timeout
                   then function end 
  matloab await ke baad baaala code uske complete hone ke baad hi chalega peghle baala code ko chal jayega par badd baaal complete hone par hi chalega
*/ 

// or react lifecyccle main compnentdidmount inbuilt method hoti hai jisme yeh apne aap call hoti hai jaise aap code run karoge to ye automatic run hogi .  or ye sabse pehle run hoti hai code main aapka return funtion or render function dono hi baad main chalge ye sabse pehle chlati hai.














































            