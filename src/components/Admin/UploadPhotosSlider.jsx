import React from 'react';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo from '../../assets/Admin/DarkLogo.png';


const UploadPhotosSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
    <>
    <div className='Complaint-uploaded-image-slider-view' style={{width: '80%', height: '40vh', margin: '0 auto', marginTop: '5vh'}}>
      <Slider {...settings}>

        <div className="uploaded-image-card" style={{height:'40vh', width: '80%', background: '#fff'}}>
            <img src={logo} alt="DarkLogo.png" style={{width:'100%', height:'auto' , borderRadius:'15px'}}/>
        </div>

        <div className="uploaded-image-card" style={{height:'40vh', width: '80%', background: '#fff'}}>
            <img src={logo} alt="DarkLogo.png" style={{width:'100%', height:'auto' , borderRadius:'15px'}}/>
        </div>

        <div className="uploaded-image-card" style={{height:'40vh', width: '80%', background: '#fff'}}>
            <img src={logo} alt="DarkLogo.png" style={{width:'100%', height:'auto' , borderRadius:'15px'}}/>
        </div>

        <div className="uploaded-image-card" style={{height:'40vh', width: '80%', background: '#fff'}}>
            <img src={logo} alt="DarkLogo.png" style={{width:'100%', height:'auto' , borderRadius:'15px'}}/>
        </div>
      </Slider>
    
    </div>

    </>
  )
}

export default UploadPhotosSlider
