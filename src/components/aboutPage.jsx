import React from "react";

export default function Page(){
    return(
        <div className="about">
          <h2 className="AboutPara">Hello <i class="fa-solid fa-ghost" style={{color: "aliceblue"}}></i> ,I'm Aryan !</h2>
          <div className="aboutText">
          <p style={{color:"white",fontSize:"200%"}}>Software Engineer , Mern Dev <i class="fa-solid fa-seedling" style={{color: "#3A5F0B"}}></i></p>
           
            <div className="flex-text"><p>NodeJS | MongoDB | React | Express</p></div>
            <div style={{width:"100%"}}>

            <div className="flex-row">
            <a href="https://www.instagram.com/aryan_swaroop" style={{textDecoration:"none"}}><i class="fa-brands fa-instagram" style={{color: "#ffffff"}}></i></a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/aryan-swaroop-665786250/" style={{textDecoration:"none"}}><i class="fa-brands fa-linkedin" style={{color: "#ffffff"}}></i></a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://twitter.com/notAryanSwaroop" style={{textDecoration:"none"}}><i class="fa-brands fa-twitter" style={{color: "#ffffff"}}></i></a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="mailto:aryanswaroophere@gmail.com"><i class="fa-brands fa-google" style={{color: "#ffffff"}}></i></a>
            </div>

            </div>
          </div>
        </div>
    );
}