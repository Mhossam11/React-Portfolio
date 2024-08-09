import React from 'react'
import { Fragment , useEffect} from "react"

// bootstrap
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min"

// Import Swiper 
import {  Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//tailwind 
import 'tailwindcss/tailwind.css'
import 'tailwindcss/tailwind.css';

//wow animations
import WOW from 'wowjs';
import 'animate.css';

// fontawesome
import '@fortawesome/fontawesome-free/css/all.min.css';

//FEEDBACK IMAGES
import f1 from'../../assets/images/feedbacks/f1.jpg'
import f2 from'../../assets/images/feedbacks/f2.jpg'
import f3 from'../../assets/images/feedbacks/f3.jpg'
import f4 from'../../assets/images/feedbacks/f4.jpg'
import f5 from'../../assets/images/feedbacks/f5.jpg'
import f6 from'../../assets/images/feedbacks/f6.jpg'

//CSS
import './feedback.css'
const Feedback = () => {

    // initialize wow.js 
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
      }, []);
      

    return (  
        <Fragment>
            <div className="feedback_back p-5">
                <div>
                    <hr />
                        <h1 className="feedback_h1 xs:text-xs sm:text-md md:text-2xl lg:text-4xl xlg:text-5xl wow animate__animated animate__shakeY" 
                            data-wow-duration="12s" 
                            data-wow-iteration="infinite"
                        >
                         MY Feedbacks</h1>
                        <Swiper
                            modules={[Pagination]} // Install Swiper modules
                            spaceBetween={50}
                            slidesPerView={1}
                            loop={true}

                            pagination={{
                                el: '.custom-pagination', // Use custom pagination
                                clickable: true,
                            }}
                            breakpoints={{
                            
                                1024: {
                                    slidesPerView: 2, // Show 2 slides on screens >= 640px wide
                                    spaceBetween: 20, // Space between slides on screens >= 640px wide
                                },
                            }}
                            className=" my-swiper"
                        >
                            <div >                        
                                <SwiperSlide key='f1' className="col-12 col-lg-6"><img className="feedback_img" src={f1} alt='img'></img></SwiperSlide>
                            </div>
                            <div >                        
                                <SwiperSlide key='f2' className="col-12 col-lg-6"><img className="feedback_img" src={f2} alt='img'></img></SwiperSlide>
                            </div>
                            <div >                        
                                <SwiperSlide key='f3' className="col-12 col-lg-6"><img className="feedback_img" src={f3} alt='img'></img></SwiperSlide>
                            </div>
                            <div >                        
                                <SwiperSlide key='f4' className="col-12 col-lg-6"><img className="feedback_img" src={f4} alt='img'></img></SwiperSlide>
                            </div>
                            <div >                        
                                <SwiperSlide key='f5' className="col-12 col-lg-6"><img className="feedback_img" src={f5} alt='img'></img></SwiperSlide>
                            </div>
                            <div >                        
                                <SwiperSlide key='f6' className="col-12 col-lg-6"><img className="feedback_img" src={f6} alt='img'></img></SwiperSlide>
                            </div>
                        </Swiper>
                    <div className=" feedback_scroll custom-pagination "></div>
                    
                </div>
            

                <div className="footer">
                    <h1>Get in touch</h1>
                    <h3>Number : 01002784461</h3>
                    <h3>Email : mhossam572000@gmail.com</h3>
                    <div className="icons">
                    <a rel="noreferrer" href="https://www.linkedin.com/in/mohamed-hossam-112648240" className="footer_btn " target='_blank'>
                        <i className="fa-brands fa-linkedin wow animate__animated animate__hinge" 
                                data-wow-duration="8s" 
                                data-wow-iteration="infinite"
                        >
                        </i>
                    </a>
                    <a rel="noreferrer" href="https://github.com/Mhossam11" className="footer_btn " target='_blank'>
                        <i className="fa-brands fa-github  wow animate__animated animate__hinge" 
                            data-wow-duration="8.2s" 
                            data-wow-iteration="infinite"
                        >                             
                        </i>
                    </a>
                    <a rel="noreferrer" href="https://www.facebook.com/profile.php?id=100038241400249" className="footer_btn " target='_blank'>
                         <i className="fa-brands fa-facebook wow animate__animated animate__hinge" 
                            data-wow-duration="8.5s" 
                            data-wow-iteration="infinite"
                        >
                        </i>
                    </a>
                    </div>
                </div>
            </div>
        </Fragment> 
    );
}
 
export default Feedback;