import React, { Component, useState } from 'react';
import USAMap from "react-usa-map";
import './App.css'; 
import ReactDOM from 'react-dom';

    
    // mapHandler = (event) => {
    //     console.log(typeof event.target)
    // }

    
    //root = ReactDOM.createRoot(document.getElementById('root'));
class MapRenderHelper extends React.Component {
    // getRandomInt = (upper) =>{
    //     return Math.floor(Math.random() * upper);
    //   }
    stateConfig = () => {
        //var once = false;
        //console.log("once inner ",once);
        //setOnce(true);
       
            //once = true;#C3B1E1

        const hex_array = ["#C6C9D0", "#E2E5CB", "#D9C2BD", "#A2C4C6", "#ADDDCE", "#FAC898", "#C3B1E1","#9aba95","#fff4aa"]
        return {
            "CA": {
                fill: hex_array[0],
                title: "California",
                clickHandler: (event) => {
                    console.log(event.target.dataset);
            }
        },
            "OR": {
                fill: hex_array[1],
                title: "Oregon",
                clickHandler: (event) => {
                    console.log(event.target.dataset);
            }
        },
            "AL": {
                fill: hex_array[2],
                title: "Alabama",
                clickHandler: (event) => {
                    console.log(event.target.dataset);
            }
        },
            "AK": {
                fill: hex_array[3],
                title: "Alaska",
                clickHandler: (event) => {
                    console.log(event.target.dataset);
            }
        },
            "AZ": {
                fill: hex_array[8],
                title: "Arizona",
                clickHandler: (event) => {
                    console.log(event.target.dataset);
            }
        },
        "AR": {
            fill: hex_array[5],
            title: "Arkansas",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },
        "CO": {
            fill: hex_array[6],
            title: "Colorado",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },
        "CT": {
            fill: hex_array[7],
            title: "Connecticut",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },
        "DE": {
            fill: hex_array[8],
            title: "Deleware",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },
        "FL": {
            fill: hex_array[7],
            title: "Florida",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },
        "GA": {
            fill: hex_array[6],
            title: "Georgia",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

        "HI": {
            fill: hex_array[5],
            title: "Hawaii",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

        "ID": {
            fill: hex_array[4],
            title: "Idaho",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },
        "IL": {
            fill: hex_array[3],
            title: "Illinois",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },
        "IN": {
            fill: hex_array[2],
            title: "Indiana",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },
        "IA": {
            fill: hex_array[1],
            title: "Iowa",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

        "KS": {
            fill: hex_array[0],
            title: "Kansas",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },
        "KY": {
            fill: hex_array[0],
            title: "Kentucky",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },
        "LA": {
            fill: hex_array[1],
            title: "Louisiana",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },
        "ME": {
            fill: hex_array[3],
            title: "Maine",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },
        "MD": {
            fill: hex_array[3],
            title: "Maryland",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },
        "MA": {
            fill: hex_array[5],
            title: "Massachusetts",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

        "MI": {
            fill: hex_array[5],
            title: "Michigan",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

        "MN": {
            fill: hex_array[6],
            title: "Minnesota",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

        "MS": {
            fill: hex_array[7],
            title: "Mississipi",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

        "MO": {
            fill: hex_array[2],
            title: "Missouri",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

        "MT": {
            fill: hex_array[0],
            title: "Montana",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

        "NE": {
            fill: hex_array[5],
            title: "Nebraska",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

        "NV": {
            fill: hex_array[3],
            title: "Nevada",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

        "NH": {
            fill: hex_array[2],
            title: "New Hampshire",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

        "NJ": {
            fill: hex_array[3],
            title: "New jersey",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

        "NM": {
            fill: hex_array[4],
            title: "New Mexico",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

        "NY": {
            fill: hex_array[2],
            title: "New York",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

        "NC": {
            fill: hex_array[8],
            title: "North Carolina",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

        "ND": {
            fill: hex_array[7],
            title: "North Dakota",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

        "OH": {
            fill: hex_array[8],
            title: "Ohio",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

    
        "OK": {
            fill: hex_array[8],
            title: "Oklahoma",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

    
        "PA": {
            fill: hex_array[7],
            title: "Pennsylvania",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

    
        "RI": {
            fill: hex_array[6],
            title: "Rhode Island",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

    
        "SC": {
            fill: hex_array[5],
            title: "South Carolina",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

        "SD": {
            fill: hex_array[2],
            title: "South Dakota",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },
    
        "TN": {
            fill: hex_array[4],
            title: "Tennessee",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

        "TX": {
            fill: hex_array[2],
            title: "Texas",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

    
        "UT": {
            fill: hex_array[2],
            title: "Utah",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

        "VT": {
            fill: hex_array[1],
            title: "Vermont",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

        "VA": {
            fill: hex_array[2],
            title: "Virginia",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },
    
        "WA": {
            fill: hex_array[6],
            title: "Washington",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },
        "WV": {
            fill: hex_array[1],
            title: "West Virginia",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

            "WI": {
                fill: hex_array[0],
                title: "Wisconsin",
                clickHandler: (event) => {
                    console.log(event.target.dataset);
            }
        },
        "WY": {
            fill: hex_array[8],
            title: "Wyoming",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

        "DC": {
            fill: hex_array[2],
            title: "DC",
            clickHandler: (event) => {
                console.log(event.target.dataset);
        }
    },

        
        };
        
        
      };
};

export default MapRenderHelper;