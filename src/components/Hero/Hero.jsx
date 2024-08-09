import React, { useEffect, useRef } from 'react'

// typed.js (font animation)
import Typed from 'typed.js';
import "../../../node_modules/typed.js/dist/typed.umd.js"


// hero css
import 'typeface-pt-serif';
import "./hero.css"

//images
import vid from "../../assets/images/3.mp4"


const Hero = () => {

    /*******Typed.js********/
    // Create a reference to store the DOM element
  const typedElement = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    //to add new classname to typed.js
    typedElement.current.classList.add('custom-font');

    // Initialize Typed.js on mount
    typedInstance.current = new Typed(typedElement.current, {
      strings: ['Developer','Freelancer'], // Add more roles if needed
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
    });

    // Clean up Typed.js instance on component unmount
    return () => {
      typedInstance.current.destroy();
    };
  }, []);
  /*********************/

        return (
            <div className="background">
                {/* <img src={me}></img> */}
                <video className='myvid'  autoPlay loop muted>
                  <source src={vid} type="video/mp4" />
                </video>

                <div className='word'>
                     <h1  className='custom-font'>I'm <span className='custom-font' ref={typedElement}/></h1>
                </div>
            </div>
            
        );
    
}
 
export default Hero;