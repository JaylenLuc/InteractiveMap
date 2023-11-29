import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState,useRef } from 'react';
import USAMap from "react-usa-map";
import MapRenderHelper from './MapRenderHelpers.js'
import PopUp from './infobox';

var state_string_test = "";
var color = "";
function App() {
  const [show, setShow] = useState(false);
  const [prevState, setCurrent] = useState("");

  var map_helper = new MapRenderHelper();

  const mapprop = useRef(null);

  const handleLeave = () => {
    
    setShow(false);
    // console.log("on leave: ",show)
  };
  
  function handleHover  (e)  {
      let current_elem = e.target.dataset.name;
      //console.log(current_elem);
      let obj_len = Object.keys(e.target.dataset).length ;
      if (obj_len > 0 && prevState != current_elem ){

        setCurrent(current_elem);
        
        // console.log(e.target.dataset);
        // console.log(show)

        setShow(true);
        
        color = mapprop.current.props.customize[current_elem]['fill'];
        //console.log("handlehover ",mapprop.current.props.customize[current_elem]['title']);
        state_string_test = mapprop.current.props.customize[current_elem]['title'];
        
        axios.get('http://127.0.0.1:8000/getState/querystate/')
        .then(res => {
          console.log(res.data);
        })
        .catch(err => { ' oopies ' })



      }else if (obj_len == 0 ){
        setCurrent("");
        setShow(false);

      }
  };
  var state_config = map_helper.stateConfig();
  return (

      <div id = "root" className="App"  onMouseOver={(e) => handleHover(e)} onMouseOut={() => handleLeave()}>
          {
            show? <div className = "stateName" style = {{color : color }}><h1>{state_string_test}</h1></div>:
            <div className = "colorful-letters">
              <h1>
                <span>U</span>
                <span>S</span>
                <span>A</span>
                &nbsp;

                <span>F</span>
                <span>U</span>
                <span>N</span>
                &nbsp;

                <span>M</span>
                <span>A</span>
                <span>P</span>
              </h1>
            </div>
          }
          <USAMap  ref={mapprop} customize = {state_config}/>
         
          {
            show? <PopUp color = {color}/> : null
          }
          
      </div>
  );
}

export default App;
