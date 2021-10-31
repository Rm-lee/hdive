import React from "react";
import { Button, Rating } from "semantic-ui-react";
import MalLogo from "../assets/mal-logo-blue2.png";
import "./seriesCardInfo.css";
export default function SeriesInfo(props) {
  const timeFormat = () => {
    let date = props.content.FirstPremiereDate.slice(0, 10);
    let hours = props.content.FirstPremiereDate.slice(11, 13);
    let suffix = hours >= 12 ? "PM" : "AM";
    hours = ((hours + 11) % 12) + 1 + suffix;

    return date + " " + hours;
  };
  timeFormat();
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
            <p className="series-title">{props.content.Name.toUpperCase()}</p>
            <span className="season">
              {props.content.SeasonName.toUpperCase()}
            </span>
            <div className="ratings">
              <Rating
                icon="star"
                size="large"
                defaultRating={Math.round(props.content.OverallRating)}
                maxRating={5}
              />
              <p style={{ paddingLeft: "5px" }}>(Rating requires login)</p>
              <img
                style={{
                  height: "25px",
                  margin: "0 10px",
                  borderRadius: "2px",
                }}
                src={MalLogo}
                alt="mal logo"
              />
              <p>{props.content.MALScore} | </p>
              <a
                href="target _blank"
                style={{ color: "#0391C6", paddingLeft: "2px" }}
              >
                {" "}
                Score It
              </a>
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
      <div
        style={
          props.showInfo
            ? {
                display: "flex",
              }
            : { display: "none" }
        }
        className="details-bottom-buttons"
      >
        <div className="bottom-buttons active">INFORMATION</div>
        <div className="bottom-buttons">EPISODE LIST</div>
        <div className="bottom-buttons">YOU MIGHT LIKE</div>
      </div>
    </div>
  );
}
