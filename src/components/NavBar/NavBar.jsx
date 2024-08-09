import React,{useEffect} from 'react'

// bootstrap
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min"

// fontawesome
import '@fortawesome/fontawesome-free/css/all.min.css';

//wow animations
// import WOW from 'wowjs';
import WOW from '../../../node_modules/wowjs/dist/wow.min.js';

// import 'animate.css';
import '../../../node_modules/wowjs/css/libs/animate.css'

// navbar css
import "./navbar.css"

const NavBar =() => {
  
     // initialize wow.js 
     useEffect(() => {
      const wow = new WOW.WOW();
      wow.init();
    }, []);
    

    return (
        <nav className="navbar navbar-expand-lg ">
          <div className=" container container-fluid">
              <i 
                data-wow-iteration="infinite"
                className="fa-solid fa-m wow animate__animated animate__heartBeat" 
                data-wow-duration="2s"
                data-wow-delay="3s" >
              </i>
              <button className="navbar-toggler border-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="buttons collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="a nav-link " aria-current="page" href="#AboutMe">About Me</a>
                  </li>
                  <li className="nav-item">
                    <a className="a nav-link " href="#">Skills</a>
                  </li>
                  <li className="nav-item dropdown">
                  <a className="a nav-link" href="#">Projects</a>
                    <ul className="dropdown-menu">
                      <li><a className="a dropdown-item" href="#">Action</a></li>
                      <li> <hr className="dropdown-divider"/> </li>
                      <li><a className="a dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="a nav-link" href='#'>Resume</a>
                  </li>
                </ul>
              </div>
        </div>
      </nav>
   );

}

export default NavBar;