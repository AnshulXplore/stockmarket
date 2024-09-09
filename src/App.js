// import React from 'react';
import Navbar from "./components/navbar";
import Second from "./components/secondnav";
import About from "./components/about";
import Buy from "./components/buy";
import Share from "./components/seprateshare";
import Orderhistory from "./components/orderhistory";
import React, { useState } from "react";
import Payment from "./components/payment";
import Loadingbar from "react-top-loading-bar"; //react-top-loading-bar  EK NPM PACLAGE HAI JISE HUMNE ISNATALL kiya hai or hum isse ek effect create karege ek loadintg chaleaye bilkul top par
import StockState from './components/stockState'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sign from "./components/Sign";
import Login from "./components/login"
import Profile from './components/Profile'
import Transiction from "./components/transiction";
import Portfolio from "./components/portfolio";

const App = () => {
  const [Index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);
  // console.log(isUpdate)
  return (
    <StockState> 
      <Router>
      <Loadingbar color="red" progress={progress} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Navbar />
              <About setProgress={setProgress} />
            </>
          }
          />

        <Route path="/profile"
          element={
            <Profile/>
          }/>
          <Route path="/portfolio"
          element={
            <Portfolio/>
          }/>
          <Route path="/transiction"
          element={
            <Transiction/>
          }/>
        <Route path="/NHPC"
          element={
            <Share setProgress={setProgress} key={"NHPC"}   index={Index} setindex={setIndex}           keyName={"NHPC"} name={"NHPC"} fullName={"NHPC LIMITED"}/>
          }/>

        <Route path="/login"
          element={
            <Login/>
          }/>

          <Route path="/signup"
          element={
            <>
              <Second  home={'Stocks And Performance'} backColor={'rgb(3 9 9 / 81%)'} textColor={'white'} hoverColor={'pink'}/>  
              <Sign/>
            </>
          }/>
        <Route path="/BHEL"
          element={
            <Share key={'BHEL'} setProgress={setProgress} index={Index} setindex={setIndex} keyName={"BHEL"} name={"BHEL"} fullName={"Bharat Heavy Electricals"}/>
          }
        />
        <Route path="/IRFC"
          element={
            <>
              <Share setProgress={setProgress} key={"IRFC"} index={Index} setindex={setIndex} keyName={"IRFC"}   name={"IRFC"}fullName={"Indian Railway Finance Corp"}/>
            </>
          }
        />
        <Route path="/SOUTHINDIANBANK"
          element={
            <Share
              setProgress={setProgress} key={"SOUTH"} index={Index} setindex={setIndex} keyName={"SOUTH"}   name={"South Indian Bank"} fullName={"South Indian Bank"}/>
          }
        />
        <Route path="/TATAMOTORS"
          element={
            <Share setProgress={setProgress} index={Index} setindex={setIndex} keyName={"TATA"} name={"Tata Motors"}  
          fullName={"Tata Motors"}/>
          }
        />
        <Route path="/CDSL"
          element={
            <Share setProgress={setProgress} index={Index} setindex={setIndex} keyName={"CDSL"} name={"CDSL"} fullName={"Central Depository Service (India)"} />
          }
          />
        <Route path="/MOREPENLABS"
          element={
            <Share setProgress={setProgress} index={Index} setindex={setIndex} keyName={"MORPEN"} name={"Morepen Labs"} fullName={"Morepen Laboratories"}/>
          }/>
        <Route path="/ASHOKLEYLAND"
          element={
            <Share setProgress={setProgress} index={Index} setindex={setIndex} keyName={"ASHOK"}       name={"Ashok Leyland"} fullName={"Ashok Leyland"}/>
          }/>
        <Route path="/IFCI"
          element={
            <Share setProgress={setProgress} key={"IFCI"} index={Index} setindex={setIndex} keyName={"IFCI"}  name={"IFCI"} fullName={"Indian Finance Corp. India"}/>
          }/>
        <Route path="/JPPOWER"
          element={
            <Share setProgress={setProgress} index={Index} setindex={setIndex} keyName={"JP"} name={"JP Power"} fullName={"Jaiprakash Power"}/>
          }/>
          <Route path="/IDEA"
          element={
            <Share setProgress={setProgress} index={Index} setindex={setIndex} keyName={"IDEA"} name={"IDEA"} fullName={"IDEA"}/>
          }/>
        <Route path="/TATASTEEL"
          element={
            <Share setProgress={setProgress} index={Index} setindex={setIndex} keyName={"YES"} name={"TATASTEEL"} fullName={"TATASTEEL"}/>
          }/>
        <Route path="/history"
          element={
            <>
              <Orderhistory key={"order"} setProgress={setProgress}/>
            </>
          }
        />
        <Route
          path="/funds"
          element={<Payment  setProgress={setProgress}/>}
        />
        <Route
          path="/buy"
          element={
            <Buy price={"40"} Action={"BUY"} setIsUpdate={setIsUpdate} />
          }
          // render={(props) => <Buy {...props} name={location.state} />
        />
      </Routes>
    </Router>
  </StockState>
  );
};

export default App;
