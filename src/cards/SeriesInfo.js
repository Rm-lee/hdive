import React from "react";
import { Button, Rating } from "semantic-ui-react";
import "./seriesCardInfo.css";
export default function SeriesInfo(props) {

    const timeFormat = () => {

       let date = props.content.FirstPremiereDate.slice(0,10)
       let hours= props.content.FirstPremiereDate.slice(11,13)
       let suffix = hours >= 12 ? "PM":"AM"; hours = ((hours + 11) % 12 + 1) + suffix

       return date + " " + hours 
        
    }
timeFormat()
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
              <Rating icon='star' size="massive" defaultRating={Math.round(props.content.OverallRating)} maxRating={5} />
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
          <p className="premiere">Original Premiere: {timeFormat()}</p>
        </div>
      </div>
      <img
        className="series-img"
        src={props.content.MasterArtUrl}
        alt="series episode"
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
