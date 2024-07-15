// import React from 'react'
import '../../styles/pages/landingPage/Home.css'
import app from '../../assets/landingPage/app.png'


const Home = () => {
  return (
    <div className='home container1' style={{ paddingTop:"2350px"}}>
        <div className="home-text">
            <h1>Your concerns, <br/>Our promise</h1>
            <p>Register and Connect with your local council easily.<br/> Use our app to send complaints, ask questions, and book services. <br/>Download our Mobile App now and get involved in your community!</p>
            <div className="button-container">
              <button className="btn1">Register Now</button>
              <button className="btn fill">Download App</button>
            </div>   
        </div>
            <div className="app">
              <img src={app} alt="app" />
            </div>
    </div>
  );
};

export default Home;



// const Home = () => {
//   return (
//     <div className='home container1'>
//       <header>
//         <nav className="navbar">
//           <div className="home-text">
//             <h1>Your concerns, <br/>Our promise</h1>
//             <p>Register and Connect with your local council easily.<br/> Use our app to send complaints, ask questions, and book services. <br/>Download our Mobile App now and get involved in your community!</p>
//             <div className="button-container">
//               <button className="btn1">Register Now</button>
//               <button className="btn fill">Download App</button>
//             </div>   
//           </div>
//         </nav>
//       </header>
//       <div className="app">
//         <img src={app} alt="app" />
//       </div>
//     </div>
//   );
// };

