import React from "react";
import "./seriescard.css";
import "./listcarousel.css";

export default function SeriesCard(props) {
  const { content } = props;
  return (
    <div className="series-card">
      <img
        key={content.Id}
        className="list-carousel-img"
        src={content.MasterArtUrl}
        alt="show img"
      />
    </div>
  );
}
