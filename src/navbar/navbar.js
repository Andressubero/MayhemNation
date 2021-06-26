import React from "react"
import "./navbar.css"

const Navbar = () => {
    return (
        <header>

            <h1>
                Mayhem Nation
            </h1>

            <div className = "menu">
                <div>Our Programs</div>
                <div>Mayhem Daily</div>
                <div>History</div>
                <div>Train with Rich</div>
                <div>Shop</div>
                <div>Videos</div>
                <div>Cart</div>
                
            </div>
        </header>
    )
}

export default Navbar;