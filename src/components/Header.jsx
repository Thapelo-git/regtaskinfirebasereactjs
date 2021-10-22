import React from 'react';
import {NavLink} from "react-router-dom"
import './Stylling.css'

const Header = () => {
    return ( 
        <div className="container-fluid">
            <nav className="navbar" >
                {/* <NavLink to="/" className="btn" > 
                    Home
                </NavLink> */}
                <ul>
                    <li>
                    <NavLink to="/" className="btn" > 
                    Home
                </NavLink>
                    </li>
                    <li>
                    <NavLink to="/APIDATA" className="btn" > 
                    News Feed
                </NavLink>
                    </li>
                </ul>
                
                
            </nav>
        </div>
     );
}
 
export default Header;