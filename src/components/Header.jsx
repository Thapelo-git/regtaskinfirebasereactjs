import React from 'react';
import {NavLink} from "react-router-dom"
import './Stylling.css'

const Header = () => {
    return ( 
        // <div className="container-fluid">
        //     <nav className="navbar navbar-light">
            
        //         {/* <NavLink to="/" className="btn" > 
        //             Home
        //         </NavLink> */}
        //         <ul>
        //             <li>
        //             <NavLink to="/" className="btn" > 
        //             Home
        //         </NavLink>
        //             </li>
        //             <li>
        //             <NavLink to="/APIDATA" className="btn" > 
        //             News Feed
        //         </NavLink>
        //             </li>
        //         </ul>
                
                
        //     </nav>
        // </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
              <li class="nav-item">
              <NavLink to="/" className="btn" > 
                    Home
               </NavLink>        
                </li>
              <li class="nav-item">
              <NavLink to="/APIDATA" className="btn" > 
                   News Feed
               </NavLink>              </li>
            
            </ul>
           
          </div>
        </div>
      </nav>
     );
}
 
export default Header;