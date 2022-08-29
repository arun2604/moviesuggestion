import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

const Navigation = () => {
    return(
        <nav>
            <h3>Hiii</h3>
            <ul className="navlinks">
                <Link className="www" to="/">Home</Link>
                <Link className="www" to="/Login">Login</Link>
                <Link className="www" to="/Signup">Signup</Link>
            </ul>
        </nav>
    );
};

export default Navigation;