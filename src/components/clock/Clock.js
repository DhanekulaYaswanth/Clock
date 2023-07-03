import React, { useState, useEffect } from "react";
import './Clock.css';
import Analog from "../AnalogClock/Analog.js";

function Clock() {
  const [time, setTime] = useState(getCurrentTime());
  const [meridian,setMeridian] = useState('');
  const [format,setformat] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime())
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMeridian(hours()>=12?'PM':'AM')
    }, 0);

    return () => clearInterval(interval);
  }, []);



  function hours(){
    const today = new Date();
    const hours = today.getHours().toString().padStart(2, "0");
    return hours;
  }

  function currentdate(){
    const today = new Date();
    const date = today.getDate().toString().padStart(2, "0");
    var month = today.getMonth()
    month=(month+1).toString().padStart(2, "0");
    const year = today.getFullYear().toString().padStart(2, "0")
    return `${date} / ${month} / ${year}`;
  }

  function getCurrentTime() {
    const today = new Date();
    const hours = today.getHours().toString().padStart(2, "0");
    const minutes = today.getMinutes().toString().padStart(2, "0");
    const seconds = today.getSeconds().toString().padStart(2, "0");
    return [hours,minutes,seconds];
  }

  
  const handleformat  = () => {
    setformat(!format)
  }

  return (
    <div className="container1">
        <div className="analogclockmain">
          <Analog/>
        </div>
        <div className="Container" >
            <p className="clock">{format?time[0]===12?12:String('0'+time[0]%12).slice(-2):time[0]}{" : "+ time[1]+" : "+time[2]} {format?meridian:''}</p>
            <label className="switch">
              <label style={{color:"rgb(0, 153, 255)"}}>12hrs</label>
              <input type="checkbox"/>
              <span className="slider round" onClick={handleformat}></span>
              <label>24hrs</label>
            </label>
            <p className="date">{currentdate()}</p>
        </div>
    </div>
  );
}

export default Clock;
