import React from "react"
import "./navbar.css"
import {CartWidget} from '../Cartwidget/CartWidget'

import {Link} from "react-router-dom"


const Navbar = () => {
    return (
        <header>

            <h1>
                Mayhem Nation
            </h1>

            <div className = "menu">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/Clothing" className="navbar-link">Clothing</Link>
                <Link to="/FitnessEquipment" className="navbar-link">Fitness Equipment</Link>
                <Link to="/Contact" className="navbar-link">Contact</Link> 
                <CartWidget />
            </div>
        </header>
    )
}

export default Navbar;