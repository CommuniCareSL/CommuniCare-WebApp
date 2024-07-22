import React from 'react';

import Slider from "react-slick";
import ProgressBar from "@ramonak/react-progress-bar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <div className="card-slider-section-view">
      <Slider {...settings}>

        <div className="card-slider-section-view-cards">
          <div className="card-slider-section-view-cards-title">
            <span className="material-symbols-outlined">dashboard</span>
            <h3>Renting Service</h3>
          </div>
          <div className="card-slider-section-view-cards-details">
            <p>Remaining Service Requests  :</p><h5>40</h5>
          </div>
          <div className="card-slider-section-view-cards-progress-bar">
           <ProgressBar completed={60} bgColor='#0991FF' animateOnRender={true} labelSize='10px' height='12px'/>
          </div>
        </div>

        <div className="card-slider-section-view-cards">
          <div className="card-slider-section-view-cards-title">
            <span className="material-symbols-outlined">dashboard</span>
            <h3>Renting Service</h3>
          </div>
          <div className="card-slider-section-view-cards-details">
            <p>Remaining Service Requests  :</p><h5>40</h5>
          </div>
          <div className="card-slider-section-view-cards-progress-bar">
           <ProgressBar completed={40} bgColor='#0991FF' animateOnRender={true} labelSize='10px' height='12px'/>
          </div>
        </div>

        <div className="card-slider-section-view-cards">
          <div className="card-slider-section-view-cards-title">
            <span className="material-symbols-outlined">dashboard</span>
            <h3>Renting Service</h3>
          </div>
          <div className="card-slider-section-view-cards-details">
            <p>Remaining Service Requests  :</p><h5>40</h5>
          </div>
          <div className="card-slider-section-view-cards-progress-bar">
           <ProgressBar completed={80} bgColor='#0991FF' animateOnRender={true} labelSize='10px' height='12px'/>
          </div>
        </div>

        <div className="card-slider-section-view-cards">
          <div className="card-slider-section-view-cards-title">
            <span className="material-symbols-outlined">dashboard</span>
            <h3>Renting Service</h3>
          </div>
          <div className="card-slider-section-view-cards-details">
            <p>Remaining Service Requests  :</p><h5>40</h5>
          </div>
          <div className="card-slider-section-view-cards-progress-bar">
           <ProgressBar completed={10} bgColor='#0991FF' animateOnRender={true} labelSize='10px' height='12px'/>
          </div>
        </div>

        <div className="card-slider-section-view-cards">
          <div className="card-slider-section-view-cards-title">
            <span className="material-symbols-outlined">dashboard</span>
            <h3>Renting Service</h3>
          </div>
          <div className="card-slider-section-view-cards-details">
            <p>Remaining Service Requests  :</p><h5>40</h5>
          </div>
          <div className="card-slider-section-view-cards-progress-bar">
           <ProgressBar completed={20} bgColor='#0991FF' animateOnRender={true} labelSize='10px' height='12px'/>
          </div>
        </div>

        <div className="card-slider-section-view-cards">
          <div className="card-slider-section-view-cards-title">
            <span className="material-symbols-outlined">dashboard</span>
            <h3>Renting Service</h3>
          </div>
          <div className="card-slider-section-view-cards-details">
            <p>Remaining Service Requests  :</p><h5>40</h5>
          </div>
          <div className="card-slider-section-view-cards-progress-bar">
           <ProgressBar completed={50} bgColor='#0991FF' animateOnRender={true} labelSize='10px' height='12px'/>
          </div>
        </div>

        <div className="card-slider-section-view-cards">
          <div className="card-slider-section-view-cards-title">
            <span className="material-symbols-outlined">dashboard</span>
            <h3>Renting Service</h3>
          </div>
          <div className="card-slider-section-view-cards-details">
            <p>Remaining Service Requests  :</p><h5>40</h5>
          </div>
          <div className="card-slider-section-view-cards-progress-bar">
           <ProgressBar completed={90} bgColor='#0991FF' animateOnRender={true} labelSize='10px' height='12px'/>
          </div>
        </div>

        <div className="card-slider-section-view-cards">
          <div className="card-slider-section-view-cards-title">
            <span className="material-symbols-outlined">dashboard</span>
            <h3>Renting Service</h3>
          </div>
          <div className="card-slider-section-view-cards-details">
            <p>Remaining Service Requests  :</p><h5>40</h5>
          </div>
          <div className="card-slider-section-view-cards-progress-bar">
           <ProgressBar completed={70} bgColor='#0991FF' animateOnRender={true} labelSize='10px' height='12px'/>
          </div>
        </div>

      </Slider>

    </div>
  )
}

export default CardSlider
