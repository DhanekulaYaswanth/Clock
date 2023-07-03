import React, { useEffect } from "react";
import './Stopwatch.css'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRecordVinyl,  faCirclePlay,faCirclePause, faArrowRotateRight} from '@fortawesome/free-solid-svg-icons';
import {faFlag, faClipboard} from '@fortawesome/free-regular-svg-icons'

function Stopwatch() {
  const [isStarted, setisStarted] = useState(false);
  const [ispaused, setispaused] = useState(false);
  const [isReset, setisReset] = useState(false);
  const [countdownList, setCountdownList] = useState([]);
  const [displaycountdown,setdisplaycountdown] = useState(false);


  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [milliseconds,setMilliseconds] = useState(0);  

  const handleStart = () =>{
    if(isStarted===false){
      setisStarted(!isStarted)
      setisReset(!isReset)
    }
    else if(isStarted===true && ispaused===false)
      setispaused(!ispaused)
    else
      setispaused(!ispaused)
  }

  const handleReset = () => {
      setisReset(!isReset)
      setispaused(false)
      setisStarted(false)
      setSeconds(0)
      setHours(0)
      setMinutes(0)
      setMilliseconds(0)
      setdisplaycountdown(false)
      setCountdownList([])
  }

  const displayCurrent = () => {
    const currentTime = `${String("0" + hours).slice(-2)}:${String("0" + minutes).slice(-2)}:${String("0" + seconds).slice(-2)}:${String("0" + milliseconds).slice(-2)}`;
    setCountdownList([currentTime, ...countdownList]);
  }

  useEffect(() => {
    let interval = null;
    if (isStarted && !ispaused) {
      interval = setInterval(() => {
        if (seconds === 59 && minutes === 59) {
          setHours(hours + 1);
          setMinutes(0);
          setSeconds(0);
          setMilliseconds(0)
        } else if (seconds === 60) {
          setMinutes(minutes + 1);
          setSeconds(0);
          setMilliseconds(0)
        } else if(milliseconds === 99){
          setSeconds(seconds + 1);
          setMilliseconds(0)
        }
        else{
          setMilliseconds(milliseconds+1);
        }
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isStarted, ispaused, seconds, minutes, hours,milliseconds]);

  return (
    <div className="container">
      <div className="stopwatchcontainer">
        <div className="timer">
          <h1>{String("0" + hours).slice(-2)} : {String("0" + minutes).slice(-2)} : {String("0" + seconds).slice(-2)} </h1><p className="milliseconds">: {String("0" + milliseconds).slice(-2)}</p>
        </div>
        
        <div className="countdownbox">
          {countdownList.length > 0 && (
            <div className="countdownlist">
              {countdownList.map((time, index) => (
                <div className="timerstyle">
                  <FontAwesomeIcon icon={faFlag} className="">{index+1}</FontAwesomeIcon><li className="timers">{String("0" + (countdownList.length-index)).slice(-2)}</li><li key={index}>. {time}</li>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="buttons">
          <button onClick={handleStart}><FontAwesomeIcon  icon={isStarted? ispaused? faCirclePlay : faCirclePause : faCirclePlay} className="faplaypause "/> </button>
          {isStarted?<button className="flag"><FontAwesomeIcon icon={faClipboard}  onClick={displayCurrent}/></button>:''}
          <button hidden={!isReset} onClick={handleReset} className="restart "><FontAwesomeIcon icon={faArrowRotateRight}></FontAwesomeIcon></button>
        </div>
      
        
      </div>
    </div>
  );
}

export default Stopwatch;
