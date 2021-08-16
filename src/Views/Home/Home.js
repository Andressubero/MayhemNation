
import React from "react"
import SwipeableTextMobileStepper from "../../components/Carrusel/Carrusel"
import "./Home.css"

function Home() {

    
    return ( 
        <div> 
            <div><h1>Do you want to take your training to another level? you are in the right place.</h1></div>
            <div className="carrusel-container"><SwipeableTextMobileStepper/></div>
        </div>
       
        
    )
}

export default Home