import React from "react";
import { Button, Rating } from "semantic-ui-react";
import "./seriesCardInfo.css";
export default function SeriesInfo(props) {
  console.log(props);
  return (
      <div className="details-container">
    <div
      style={
        props.showInfo
          ? {
              display: "flex",
            }
          : { display: "none" }
      }
      className="series-card-info"
    >
      {" "}
      <div className="details">
        <div className="info-overlay">
          <span className="series-title">{props.content.Name}</span>
          <span className="season">{props.content.SeasonName}</span>
          <div className="ratings">
              <Rating icon='star' size="massive" defaultRating={props.content.OverallRating} maxRating={5} />
          </div>
          <div className="series-buttons">
            <Button
              size="mini"
              style={{ backgroundColor: "#00AEEF", color: "white" }}
            >
              ADD TO QUEUE
            </Button>
            <Button
              size="mini"
              style={{ backgroundColor: "#00AEEF", color: "white" }}
            >
              ADD FAVORITE
            </Button>
          </div>

          <p className="synopsis">{props.content.ShortSynopsis}</p>
          <p className="premiere">Original Premiere: {props.content.FirstPremiereDate}</p>
        </div>
      </div>
      <img
        className="series-img"
        src={props.content.MasterArtUrl}
        alt="show image"
      />
    </div>
    <div style={
        props.showInfo
          ? {
              display: "flex",
            }
          : { display: "none" }
      }className="details-bottom-buttons">
        <div className="bottom-buttons active" >INFORMATION</div>
        <div className="bottom-buttons">EPISODE LIST</div>
        <div className="bottom-buttons">YOU MIGHT LIKE</div>

    </div>
    </div>
  );
}
