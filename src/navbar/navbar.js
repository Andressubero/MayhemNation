import React from "react"
import "./Navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <header>

            <h1>
                Mayhem Nation
            </h1>

            <div className = "menu">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/programs" className="navbar-link">Our Programs</Link>
                <Link to="/shop" className="navbar-link">Shop</Link>
                <Link to="/contact" className="navbar-link">Contact</Link> 
            </div>
        </header>
    )
}

export default Navbar;