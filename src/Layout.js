import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHourglass, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { faClock as regclock, faHourglass as regtimer } from "@fortawesome/free-regular-svg-icons";
import './Layout.css'
import Footer from "./components/Footer/Footer";

function Layout() {
  const [clock, setClock] = useState(true);
  const [stopwatch, setStopwatch] = useState(false);
  const [timer, setTimer] = useState(false);

  const handleClockClick = () => {
    setClock(true);
    setStopwatch(false);
    setTimer(false);
  };

  const handleStopwatchClick = () => {
    setClock(false);
    setStopwatch(true);
    setTimer(false);
  };

  const handleTimerClick = () => {
    setClock(false);
    setStopwatch(false);
    setTimer(true);
  };

  return (
    <>
      <nav className="navcontainer">
        <ul>
          <li>
            <NavLink to="/" onClick={handleClockClick}>
              <FontAwesomeIcon icon={clock ? faClock : regclock} className={clock ? "navicon clockicon" : "navicon"} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/stopwatch/" onClick={handleStopwatchClick}>
              <FontAwesomeIcon icon={faStopwatch} className={stopwatch ? "navicon stopwatch" : "navicon"} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/timer/" onClick={handleTimerClick}>
              <FontAwesomeIcon icon={timer ? faHourglass : regtimer} className={timer ? "navicon timericon" : "navicon"} />
            </NavLink>
          </li>
        </ul>
        <hr />
        <div className="itemcontent">
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
      </nav>
    </>
  );
}

export default Layout;
