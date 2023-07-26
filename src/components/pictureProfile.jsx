import React from "react";

export default function Profile(){
   return( <div className="profileDiv">
       <img src="aryan.png" className="AryanPhoto"/>
       <h1 style={{fontFamily:  "'Roboto Mono', monospace"}}><u><b>Stack</b></u></h1>
       
       <h2 className="stackNames"><img src="correct.png" className="blueTick"/><b>&nbsp;MongoDB</b></h2>
       <h2 className="stackNames"><img src="correct.png" className="blueTick"/><b>&nbsp;Express &nbsp;&nbsp;</b></h2>
       <h2 className="stackNames"><img src="correct.png" className="blueTick"/><b>&nbsp;React JS&nbsp;</b></h2>
       <h2 className="stackNames"><img src="correct.png" className="blueTick"/><b>&nbsp;Node JS&nbsp;</b></h2>      
       
    </div>);
}