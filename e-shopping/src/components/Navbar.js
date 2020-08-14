import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"


const  Navbar =()=>  {
    
    return (
        <nav className="nav-wrapper">
            <h2><Link to="/">Shopping</Link></h2>
       
            <ul className="right">
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Register">Register</Link></li>
                <li className="basket"><Link to="/ShoppingCart"><ion-icon name="cart"></ion-icon>Shopping_cart<span></span></Link></li>
            </ul>
     
    </nav> 
    )
}

export default Navbar;
