import React from 'react';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="card-slider-section-view">
      <Slider {...settings}>

        <div className="card-slider-section-view-cards">Title 1</div>

        <div className="card-slider-section-view-cards">Title 2</div>

        <div className="card-slider-section-view-cards">Title 3</div>

        <div className="card-slider-section-view-cards">Title 4</div>

        <div className="card-slider-section-view-cards">Title 5</div>

        <div className="card-slider-section-view-cards">Title 6</div>

        <div className="card-slider-section-view-cards">Title 7</div>

        <div className="card-slider-section-view-cards">Title 8</div>

      </Slider>

    </div>
  )
}

export default CardSlider
