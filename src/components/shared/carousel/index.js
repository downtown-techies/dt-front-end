import React from "react";
import Image from '../image';
import Slider from 'react-slick';
import building from '../../../assets/images/building.png';
import reflection from '../../../assets/images/reflection.png';

import "./slick.css";
import "./slick-theme.css";

export default class Carousel extends React.Component {
  render() {
    var settings = {
      dots: false,
      lazyLoad: false,
      pauseOnHover: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            adaptiveHeight: true,
            variableWidth: true,
          }
        },
      ]
    };
    return (
      <>
        <Slider {...settings}>
          <div>
            <Image src={building} />
          </div>
          <div>
            <Image src={reflection} />
          </div>
        </ Slider>
      </>
    );
  }
}
