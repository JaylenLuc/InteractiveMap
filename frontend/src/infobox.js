import React, { Component, useState } from 'react';
import USAMap from "react-usa-map";
import './App.css'; 
import ReactDOM from 'react-dom';

function PopUp({color}) {
    //console.log("in popup ", color);
    return (
    <div  style={{'backgroundColor': color, 'borderRadius': 6, 'padding': 10 }} className="popup">
        TESTING
    </div>
   );
}

export default PopUp;
