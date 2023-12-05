import React, { Component, useState } from 'react';
import USAMap from "react-usa-map";
import './App.css'; 
import ReactDOM from 'react-dom';
function PopUp({color, content}) {
    //console.log("in popup ", color);

    return (
    <div  style={{'backgroundColor': color, 'borderRadius': 10, 'padding': 10 }} className="popup">
        <img src = {content["flag"]} ></img><br></br>
        ISO 3166-2 code : {content["name"]} <br></br>
        Capital : {content["capital"]} <br></br>
        Largest City : {content["largest_city"]} <br></br>
        Establishment Date : {content["est_date"]} <br></br>
        Population : {content["pop"]} <br></br>
        Total Area miles^2 : {content["total_area"]} <br></br>
        Water Area miles^2 : {content["water_area"]} <br></br>
        Number of Representatives : {content["numrep"]} <br></br>

    </div>
   );
}

export default PopUp;
