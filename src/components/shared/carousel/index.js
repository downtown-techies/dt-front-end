import React from "react";
import Slider from "react-slick";
import Image from '../image';
import "./slick.css";
import "./slick-theme.css";

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <>
        <Slider {...settings}>
          <div>
            <Image />
          </div>
          <div>
            <Image src="" />
          </div>
        </Slider>
      </>
    );
  }
}
