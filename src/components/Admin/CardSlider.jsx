import React from 'react';

import Slider from "react-slick";
import ProgressBar from "@ramonak/react-progress-bar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import rentImage from '../../assets/Admin/rent.png';
import BookingImage from '../../assets/Admin/booking.png';

const CardSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  };

  return (
    <div className="card-slider-section-view">
      <Slider {...settings}>

        <div className="card-slider-section-view-cards">
          <div className="card-slider-section-view-cards-title">
            <img src={rentImage} alt="rent-icon" />
            <h3>Renting</h3>
          </div>
          <div className="card-slider-section-view-cards-details">
            <p>Remaining Service Requests  :</p><h5>60</h5>
          </div>
          <div className="card-slider-section-view-cards-progress-bar">
           <ProgressBar completed={60} bgColor='#0991FF' animateOnRender={true} labelSize='10px' height='12px'/>
          </div>
        </div>

        <div className="card-slider-section-view-cards">
          <div className="card-slider-section-view-cards-title">
            <img src={BookingImage} alt="booking-icon" />
            <h3>Booking/Reservation </h3>
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
            <h3>Cemetery Reservation</h3>
          </div>
          <div className="card-slider-section-view-cards-details">
            <p>Remaining Service Requests  :</p><h5>80</h5>
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
            <p>Remaining Service Requests  :</p><h5>10</h5>
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
            <p>Remaining Service Requests  :</p><h5>20</h5>
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
            <p>Remaining Service Requests  :</p><h5>50</h5>
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
            <p>Remaining Service Requests  :</p><h5>90</h5>
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
            <p>Remaining Service Requests  :</p><h5>60</h5>
          </div>
          <div className="card-slider-section-view-cards-progress-bar">
           <ProgressBar completed={60} bgColor='#0991FF' animateOnRender={true} labelSize='10px' height='12px'/>
          </div>
        </div>

      </Slider>

    </div>
  )
}

export default CardSlider
