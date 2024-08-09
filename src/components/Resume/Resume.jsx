import React, {useEffect} from 'react'

//wow animations
import WOW from 'wowjs';
import 'animate.css';

import './resume.css'

const Resume = () => {
    // initialize wow.js 
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
      }, []);
      
    return (
        <div className='resume_Background'>
            <div className="container">
                <div 
                className="resume_top wow animate__animated animate__shakeY" 
                data-wow-duration="10s" 
                data-wow-iteration="infinite">
                    <h1 
                    >Resume</h1>
                    <p>Software Engineer who is passionate about Software design and implementation, I'm working on enrichment my 
                    knowledge in this field through online courses and hands on practicing.</p>
                </div>
            </div>
            
            <div className="container resume_container">
                <div className="resume_row row">
                    <div className='col-12   col-lg-6 '>

                        <div data-aos="fade-right">
                            <h2 className='resume_title'>Summary</h2>

                            <div className="resume_item">
                                <h4>Mohamed Hossam Mohamed Ali</h4>
                                <p>I'm student at the Faculty of Engineering, Helwan University</p>
                                <ul>
                                    <li>Nasr City, Cairo</li>
                                    <li>+02 01002784461</li>
                                    <li>mhossam572000@gmail.com</li>
                                </ul>
                            </div>
                        </div>

                        <div data-aos="fade-right">
                            <h2 className='resume_title'>Education</h2>

                            <div className="resume_item">
                                <h4>Student at Helwan University</h4>
                                <p>Communication and Information Department</p>
                                <h5>2022 - 2025</h5>
                            </div>
                        </div>

                        <div data-aos="fade-right">
                            <h2 className='resume_title'>Skills</h2>

                            <div className="resume_item">
                                <h4>tech skills</h4>
                                <ul>
                                    <li>Programming Languages: (JavaScript, Java, ES6)</li>
                                    <li>CSS</li>
                                    <li>HTML</li>
                                    <li>React</li>
                                    <li>ES6</li>
                                    <li>Bootstrap</li>
                                    <li>JQuery</li>
                                    <li>Plugins</li>
                                    <li>Github</li>
                                    <li>SQL</li>
                                </ul>
                            </div>
                        </div>

                        <div data-aos="fade-right">
                            <h2 className='resume_title'>Courses</h2>

                            <div className="resume_item">
                                <ul>
                                    <li>Basic Embedded Syste Diploma : Aug 2022 - Mar 2023</li>
                                    <li>Automotive Diploma : May 2023 - Sept 2023</li>
                                    <li>Front-End diploma : MAR,2024 - JUN,2024</li>
                                    <li>Back-End diploma : present</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className='col-12   col-lg-6 '>                   
                         <div data-aos="fade-left">
                            <h2 data-aos="fade-left" className='resume_title'>Professional Experience</h2>

                            <div data-aos="fade-left" className="resume_item">
                                <h4>Instructor</h4>
                                <h5>JAN, 2024 - present</h5>
                               <p>DBUGERZ Company</p>
                            </div>

                            <div data-aos="fade-left" className="resume_item">
                                <h4>Trainee</h4>
                                <h5>Aug, 2022</h5>
                                <h5>SEPT, 2023</h5>
                               <p>ARAB INTERNATIONAL OPTRONICS</p>
                            </div>

                            <div data-aos="fade-left" className="resume_item">
                                <h4>Trainee</h4>
                                <h5>JUL, 2024</h5>
                                <h5>AUG, 2024</h5>
                               <p>INFORMATION TECHNOLOGY INISTITUTE</p>
                            </div>

                        </div>

                        <div data-aos="fade-left">
                            <h2 className='resume_title'>Projects</h2>

                            <div className="resume_item">
                                <ul>
                                    <li>Smart Home System</li>
                                    <li>Porche DataBase Management System</li>
                                    <li>FM Radio</li>
                                    <li>Rc Car</li>    
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
    
}
 
export default Resume;