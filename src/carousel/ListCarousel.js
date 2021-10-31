import React,{useState} from "react";
import Slider from "react-slick";
import SeriesCard from "../cards/SeriesCard";
import SeriesInfo from "../cards/SeriesInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./listcarousel.css";

function ListCarousel(props) {
  const seriesCatList = props.content.slice(0,15)
  const [seriesInfo,updateSeriesInfo] = useState()
  const [showInfor,setShowInfo]=useState(false)

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
        {seriesCatList.map((content) => (
          <SeriesCard key={content.id + 99} id={props.id} showInfo={showInfor} setShowInfo={setShowInfo}updateSeriesInfo={updateSeriesInfo}content={content} />
        ))}
      </Slider>
      {seriesInfo && 
      <SeriesInfo showInfo={showInfor} setShowInfo={setShowInfo} content={seriesInfo} /> }
    </div>
  );
}
export default ListCarousel;
