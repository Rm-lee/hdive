import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./seriescard.css";

export default function SeriesCard(props) {
  const { content } = props;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="series-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ position: "absolute" }}>
        <div
          style={hovered ? { opacity: ".8" } : null}
          className="card-overlay"
        >
          <FontAwesomeIcon className="play-icon" icon="play-circle" />
          <FontAwesomeIcon
            className={
              hovered ? "chevron-down chevron-slide-down" : "chevron-down"
            }
            icon="chevron-down"
          />
          <p className="series-card-title">{content.Name}</p>
        </div>
        <img
          key={content.Id}
          className="list-carousel-img"
          src={content.MasterArtUrl}
          alt="show img"
        />
      </div>
    </div>
  );
}
