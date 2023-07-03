import React, { useEffect, useState } from "react";
import './Analog.css'
import { setSeconds } from "date-fns";
function Analog(){

    const now = new Date();
        
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;

    const [sec,setsec] = useState(secondsDegrees);
    const [min,setmin] = useState(minsDegrees);
    const [hrs,sethrs] = useState(hourDegrees);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setDate()
        }        ,1000)
    return () => clearInterval(interval);

    },[])

    function setDate() {
        const now = new Date();
        
        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;

        setsec(secondsDegrees)
        // secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        
        const mins = now.getMinutes();
        const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
        // minsHand.style.transform = `rotate(${minsDegrees}deg)`;
        setmin(minsDegrees)

        const hour = now.getHours();
        const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
        sethrs(hourDegrees)
        // hourHand.style.transform = `rotate(${hourDegrees}deg)`;
        console.log(sec,mins,hrs)
    }
    return(
        <div className="analogclock">
            <div className="outer-clock-face">
                <div className="marking marking-one"></div>
                <div className="marking marking-two"></div>
                <div className="marking marking-three"></div>
                <div className="marking marking-four"></div>
                <div className="inner-clock-face">     
                    <div className="hand hour-hand" style={{transform:`rotate(${hrs}deg)`}}></div>
                    <div className="hand min-hand" style={{transform:`rotate(${min}deg)`}}></div>
                    <div className="hand second-hand" style={{transform:`rotate(${sec}deg)`}}></div>
                </div>
            </div>
        </div>
    )
}

export default Analog;