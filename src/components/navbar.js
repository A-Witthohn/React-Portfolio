import React from "react";
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav id="navbar" className="nav-menu navbar">
            <ul>
                <li>
                    <Link className="nav-link scrollto" to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav-link scrollto" to="/about">About</Link>
                </li>
                <li>
                    <Link className="nav-link scrollto" to="/contact">Contact Me</Link>
                </li>
                <li>
                    <Link className="nav-link scrollto" to="/portfolio"> Portfolio</Link>
                </li>

            </ul>
        </nav>
    );
}
export default Navbar;