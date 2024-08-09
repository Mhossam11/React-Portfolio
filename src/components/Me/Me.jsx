import React, { useEffect } from 'react';
// bootstrap
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min"

// fontawesome
import '@fortawesome/fontawesome-free/css/all.min.css';

//AOS ANIMATIOS
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


// MY Image
import  me from "../../assets/images/hero-bg.jpg"

import "./me.css"

const Me = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Add any configuration options you need
          delay: 50,
          
        });
      }, []);

    return (
        // for background only
        <div className="back ">
            <div id='AboutMe' className="me_row row h-50 ">
                        <div className="me_container  col-12   col-lg-6  ">
                            <div data-aos="fade-right" className="card container col-lg-12" >
                                    <img src={me} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <a rel="noreferrer" href="https://www.linkedin.com/in/mohamed-hossam-112648240" className="btn " target='_blank'><i className="fa-brands fa-linkedin fa-fade"></i></a>
                                        <a rel="noreferrer" href="https://github.com/Mhossam11" className="btn " target='_blank'><i className="fa-brands fa-github fa-fade "></i></a>
                                        <a rel="noreferrer" href="https://www.facebook.com/profile.php?id=100038241400249" className="btn " target='_blank'><i className="fa-brands fa-facebook fa-fade"></i></a>
                                    </div>
                            </div>
                        </div>
                        
                        <div data-aos="fade-left"  className="me_about col-12  col-lg-6 ">
                            <p>I am a Communication and Information Technology student at the Faculty of Engineering, Helwan University, with a focus on software development. I am skilled in both front-end and back-end technologies, including JavaScript, React, and jQuery. My projects demonstrate my commitment to developing efficient, user-friendly applications. Furthermore, I have strong research abilities, allowing me to stay current with the latest trends and advancements in the industry.</p>
                        </div>
             </div>
            
        </div>
    );
}
 
export default Me;