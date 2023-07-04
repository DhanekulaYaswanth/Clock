import React from "react";
import Stopwatch from "./components/stopwatch/Stopwatch";
import Clock from './components/clock/Clock'
import './index.css'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from './Layout.js';
import Timer from "./components/Countdowntimer/Timer.js";

function App(){
  return(
    <BrowserRouter basename="/clock">
      <Routes>
        <Route path='/' element={<Layout/>} className="routing">
          <Route index element={<Clock/>}></Route>
          <Route path="/stopwatch" element={<Stopwatch/>}></Route>
          <Route path="/timer" element={<Timer/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;