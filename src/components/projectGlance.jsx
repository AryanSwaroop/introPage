//eslint:6

import React ,{ useState } from "react";
 

export default function Sample(props){

    const [mouse, SetmouseState] = useState(false);


    const MouseEnter = () => {
        SetmouseState(true);
    }

    const MouseLeave = () => {

        SetmouseState(false);
    }

    return(
        <div className="SampleDiv" id="portfolio">
        <img src={props.source} alt={props.alt} className= {mouse ? "nonSamplePhoto" : "SamplePhoto"} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}/>
        
           
        </div>
    );

}