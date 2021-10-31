import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
function Carousel(props) {
  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={(className, "styled-next-arrow")}
        style={{ display: "block" }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon="chevron-right" />
      </div>
    );
  }
  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={(className, "styled-prev-arrow")}
        style={{ display: "block" }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon="chevron-left" />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    slidesToShow: props.slidesToShow,
    slidesToScroll: props.slidesToScroll,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    appendDots: (dots) => (
      <div >
        <ul style={{ margin: " 0px", padding: "0" }}> {dots} </ul>
      </div>
    ),

    customPaging: (i) => <div></div>,
  };
  return (
    <div className="top-page-carousel">
      <Slider {...settings}>

        {props.content.map((content,i) => (
     
         <img key={i}src={content.KeyArtUrl} alt="highlight reel" />
  
      ))}
      </Slider>
    </div>
  );
}
export default Carousel;
