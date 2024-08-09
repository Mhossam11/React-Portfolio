import React, { Fragment, useEffect } from 'react'

//wow animations
import WOW from 'wowjs';
import 'animate.css';

import './loadingpage.css'

//loading page
import loading_vid from '../../assets/images/7.webm'
const Loadingpage = () => {

      // initialize wow.js 
      useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
      }, []);
      

    return (  
        <Fragment>
            <div className='Loadingpage_back'>
                <video className='myvid'  autoPlay loop muted>
                    <source src={loading_vid} type="video/mp4" />
                </video>
                <div className="LoadingPage_txt wow animate__animated animate__bounceInUp" data-wow-duration="1s" >
                    <h1 className='wow animate__animated animate__bounceInUp' data-wow-duration="2s" >Welcome </h1> 
                    <h1 className='wow animate__animated animate__bounceInUp' data-wow-duration="3s" >to </h1> 
                    <h1 className='wow animate__animated animate__bounceInUp' data-wow-duration="4s" >my </h1> 
                    <h1 className='wow animate__animated animate__bounceInUp' data-wow-duration="5s" >Portfolio</h1> 
                </div>
                <div className="loadingpage_body"></div>
            </div>
            
            </Fragment>
    );
}
 
export default Loadingpage;