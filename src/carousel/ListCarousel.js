import React from "react";
import Slider from "react-slick";
import SeriesCard from "./SeriesCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./listcarousel.css";

function ListCarousel(props) {
  function NextArrow(props) {
    const { className, style, onClick } = props;
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
    const { className, style, onClick } = props;
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
    speed: 500,
    slidesToShow: props.slidesToShow,
    slidesToScroll: props.slidesToScroll,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    appendDots: (dots) => (
      <div style={{}}>
        <ul style={{ margin: " 0px", padding: "0" }}> {dots} </ul>
      </div>
    ),

    customPaging: (i) => (
      <div
        style={{
          height: "15px",
          background: "transparent",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div></div>
      </div>
    ),
  };
  return (
    <div className="list-carousel">
      <Slider {...settings}>
        {props.content.map((content) => (
          <SeriesCard content={content} />
        ))}
      </Slider>
    </div>
  );
}
export default ListCarousel;
