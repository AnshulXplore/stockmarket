import image from './images/image1.svg';
import image2 from './images/image2.png';
import image3 from './images/image7.jpg';
import image4 from './images/image5.png';
import image5 from './images/image4.png';
import image6 from './images/image6.png';
import image7 from './images/image8.png';
import image8 from './images/image9.jpg';
import image9 from './images/image10.png';
import image10 from './images/image11.png';
import React, { useState, useEffect, useRef,useContext } from 'react';
import stockContext from "./stockContext";

import './style.css';

const Funds = (props) => {
  const b=useContext(stockContext);
  const [isOpen, setIsOpen] = useState(true);
  const [anima, setAnima] = useState(false);
  const a = useRef(null);

  const handle = () => {
    props.setContext(false);
  };

  const handleOn = () => {
    setAnima(true);
    b.setavaliableAMount(parseInt(props.price)+b.states.avalaibleAmount);
  };

  useEffect(() => {
    setProgress(0);
    const elements = document.querySelectorAll('.hello');
    elements.forEach((e) => {
      e.addEventListener('click', (event) => {
        if (a.current) {
          a.current.style.border = 'none';
        }
        e.style.border = '2px solid blue';
        a.current = e;
        setProgress(100);
        return null;
      });
    });

    return () => {
      elements.forEach((e) => {
        e.removeEventListener('click', () => {});
      });
    };
  }, []);

  let { setContext, price, name, amountSet, setProgress } = props;
  return (
    <div style={{ position: 'relative', left: '580px', display: 'flex', flexDirection: 'column', zIndex: '999', top: '280px' ,backgroundColor:'transparent',height:'134px'}}>
      <div style={{ border: '2px solid white', width: '280px', height: '174px', borderRadius: '8px', background: 'white' }}>
        <nav style={{ backgroundColor: '#858dc1', display: 'flex', color: 'white', height: '40px', borderRadius: '8px 8px 0px 0px', width: '100%', alignItems: 'center' }}>
          <h5 style={{ position: 'relative', left: '16px' }}>Hi! {name}</h5>
          <img onClick={handle} src={image} alt="" style={{ position: 'relative', left: '56px', bottom: '2px', cursor: 'pointer' }} />
        </nav>
        <p style={{ backgroundColor: 'white', color: 'black', fontWeight: 'bold' }}>Pay with QR code</p>
        <div style={{ backgroundColor: 'white', display: 'flex', position: 'relative', bottom: '16px', alignItems: 'center', border: '1px solid black' }}>
          <img style={{ height: '80px' }} src={image2} alt="not" />
          <div style={{ fontWeight: 'bold', lineHeight: '1' }}>
            <span style={{ fontWeight: 'bold', lineHeight: '0', position: 'relative', top: '6px' }}>Scan the QR using any UPI app on your phone </span>
            <img style={{ height: '30px', width: '30px', marginLeft: '4px' }} src={image4} alt="" />
            <img style={{ height: '50px', width: '50px', marginLeft: '4px' }} src={image6} alt="" />
            <img style={{ height: '30px', width: '30px', marginLeft: '4px' }} src={image5} alt="" />
            <img style={{ height: '40px', width: '40px', marginLeft: '4px' }} src={image3} alt="" />
          </div>
        </div>

        <div style={{ backgroundColor: 'white', maxHeight: '200px', overflowY: 'scroll', overflowX: 'hidden' }}>
          <p className='mx-2' style={{ fontWeight: 'bold' }}>Preffres Payment Methods</p>
          <p className='mx-2 ' style={{ fontWeight: 'bold' }}>UPI,Cards & More</p>
          <div className='mx-2 hello' style={{ cursor: 'pointer', display: 'flex', position: 'relative', bottom: '10px', border: 'none', borderRadius: '2px', width: '260px', alignItems: 'center' }}>
            <img style={{ height: '30px', width: '30px', marginLeft: '4px' }} src={image7} alt="" />
            <p className='mx-3' style={{ fontWeight: 'bold', position: 'relative', top: '8px' }}>UPI/QR</p>
            <img className='mx-5' style={{ height: '30px', width: '50', position: 'relative', left: '40px' }} src={image2} alt="" />
          </div>

          <div  className='mx-2 hello' style={{ cursor: 'pointer', display: 'flex', position: 'relative', bottom: '10px', border: 'none', borderRadius: '2px', width: '260px', alignItems: 'center' }}>
            <img style={{ height: '30px', width: '30px', marginLeft: '4px' }} src={image8} alt="" />
            <p className='mx-3' style={{ fontWeight: 'bold', position: 'relative', top: '8px' }}>Card</p>
            <img className='mx-5' style={{ height: '30px', width: '50', position: 'relative', left: '60px' }} src={image2} alt={setContext} />
          </div>

          <div  className='mx-2 hello' style={{ cursor: 'pointer', display: 'flex', position: 'relative', bottom: '10px', border: 'none', borderRadius: '2px', width: '260px', alignItems: 'center' }}>
            <img style={{ height: '30px', width: '50px', marginLeft: '4px' }} src={image9} alt="" />
            <p className='mx-3' style={{ fontWeight: 'bold', position: 'relative', top: '8px' }}>NetBanking</p>
            <img className='mx-5' style={{ height: '30px', width: '50', position: 'relative', left: '5px' }} src={image2} alt="" />
          </div>

          <div  className='mx-2 hello' style={{ cursor: 'pointer', display: 'flex', position: 'relative', bottom: '10px', border: 'none', borderRadius: '2px', width: '260px', alignItems: 'center' }}>
            <img style={{ height: '30px', width: '30px', marginLeft: '4px' }} src={image10} alt="" />
            <p className='mx-3' style={{ fontWeight: 'bold', position: 'relative', top: '8px' }}>Wallet</p>
            <img className='mx-5' style={{ height: '30px', width: '50', position: 'relative', left: '46px' }} src={image2} alt="" />
          </div>
        </div>

        <div style={{ backgroundColor: 'white', height: '40px', boxShadow: '0px 0px 5px 5px rgba(0, 0, 0, 0.5)', borderRadius: '0px 0px 8px 8px', position: 'relative', bottom: '11px' }}>
          <button onClick={handleOn} disabled={price === '' ? true : false} className='my-2' style={{ opacity: price === '' ? '0.5' : '1', display: 'flex', alignItems: 'center', backgroundColor: '#858dc1', color: 'white', border: 'none', position: 'relative', left: '0px', width: '100%', borderRadius: '0px 0px 8px 8px', top: '0px', height: '100%', justifyContent: 'center' }}>
            <h5 style={{ position: 'relative', right: '40px', top: '4px', opacity: price === '' ? '0' : '1' }}>${price}</h5> Pay Now
          </button>

          <span style={{ border: '1ps solid black', backgroundColor: 'green', textAlign: 'center', display: anima === true ? '' : 'none' }} className={anima === true ? 'button-animation' : ''}>Payment Succesful</span>
        </div>
        <div>
          {/* <img src={image} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Funds;
