import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState,useRef } from 'react';
import USAMap from "react-usa-map";
import MapRenderHelper from './MapRenderHelpers.js'
import PopUp from './infobox';

var state_string_test = "";
var color = "";
var state_map = {};
var state_content = "";
function on_start_query() {

  axios.get('http://127.0.0.1:8000/getState/querystate/')
  .then(res => {
    for (let i = 0; i < res.data.length; i ++){
      let new_slug = res.data[i]["flag"].replace(/\d{2,}px/,"150px")
      //console.log(new_slug);
      res.data[i]["flag"] = new_slug;
      state_map[res.data[i]["name"]]  = res.data[i]; 

      //console.log("ROW DATA: ", state_map[res.data[i]["name"]]);

    }
  })
  .catch(err => { ' oopies ' })


}



function App() {
  const [OnStart, setOnStart] = useState(false);
  if (OnStart == false ){
    on_start_query();
    setOnStart(true);

  }
  //console.log("CALIFORNIA: ",state_map["OR"]);
  //const state_hashmap = JSON.parse(state_resp);
  //console.log("state_hashmap: ", state_hashmap);
  const [show, setShow] = useState(false);
  const [prevState, setCurrent] = useState("");

  var map_helper = new MapRenderHelper();

  const mapprop = useRef(null);


  const handleLeave = () => {
    
    setShow(false);
    // console.log("on leave: ",show)
  };
  
  function handleHover  (e)  {
      let current_elem = e.target.dataset.name; //abbreviation
      //console.log(current_elem);
      let obj_len = Object.keys(e.target.dataset).length ;
      if (obj_len > 0 && prevState != current_elem ){

        setCurrent(current_elem);
        
        // console.log(e.target.dataset);
        // console.log(show)

        setShow(true);
        
        color = mapprop.current.props.customize[current_elem]['fill'];
        
        state_string_test = mapprop.current.props.customize[current_elem]['title'];
        if (current_elem != "DC"){
          state_content = state_map[current_elem]
        }



      }else if (obj_len == 0 ){
        setCurrent("");
        setShow(false);

      }

      //for flag url, replace the px size with 150px

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
            show? <PopUp  color = {color} content = {state_content}/> : null
          }
          
      </div>
  );
}

export default App;
