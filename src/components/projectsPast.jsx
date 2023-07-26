import React from "react";
import Sample from "./projectGlance";
import Footer from "./footer";


export default function ProjectPage(){
    return(
        <div className="projectDiv">
        
           <div className="flex-container">

                   
                        <div className="flex-item">
                        <div className="container">                        
                        <Sample source= "ecommerce.png" alt="ecomerce"  title="Ecommerce"/>

                        <Sample source= "notes.png" alt="notes" title="Notes"/>
                        </div>
                        </div>
                            
                        <div className="flex-item"><Footer/></div> 


                            

                           

             </div>
          
        </div>
        
    );
}