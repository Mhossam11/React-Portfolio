import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Import Components
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Me from './components/Me/Me';
import Resume from './components/Resume/Resume';
import Feedback from './components/feedback/Feedback';
import Loadingpage from './components/Loadingpage/Loadingpage';

import './index.css';

const RootComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      {isLoading ? (
        <Loadingpage />
      ) : (
        <>
          <NavBar />
          <Hero />
          <Me />
          <Resume />
          <Feedback />
        </>
      )}
    </React.StrictMode>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootComponent />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();







/***********************/ 
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';

// // Import Components
// import NavBar from './components/NavBar/NavBar';
// import Hero from './components/Hero/Hero';
// import Me from './components/Me/Me';
// import Resume from './components/Resume/Resume';
// import Feedback from './components/feedback/Feedback';

// import './index.css';
// import Loadingpage from './components/Loadingpage/Loadingpage';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
  
//   <React.StrictMode>
    
//     <Loadingpage></Loadingpage>
//       {/* <NavBar></NavBar>
//       <Hero></Hero>
//       <Me></Me>
//       <Resume></Resume>
//       <Feedback></Feedback> */}
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
