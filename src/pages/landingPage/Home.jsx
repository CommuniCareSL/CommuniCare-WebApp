import React from 'react';
import '../../styles/pages/landingPage/Home.css'; // Import the updated CSS
import app from '../../assets/landingPage/app.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home container1'>
      <div className="home-text">
        <h1>Your concerns, <br/>Our promise</h1>
        <p>Register and Connect with your local council easily.<br/> Use our app to send complaints, ask questions, and book services. <br/>Download our Mobile App now and get involved in your community!</p>
        
        <div className="button-container">
          <Link to="/sabharegister">
            <button className="btn1" style={{height:'50px'}}>Register Now</button>
          </Link>
          <button className="btn fill" style={{height:'50px'}}>Download App</button>
        </div>   
      </div>

      <div className="app">
        <img src={app} alt="app" />
      </div>
    </div>
  );
};

export default Home;
