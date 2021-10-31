import React, { useState, useEffect } from "react";
import ListCarousel from "../carousel/ListCarousel";
import HighlightCarousel from "./HighlightCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../data/catalog.json";
import "./landing.css";
function LandingPage() {
  const [isMobile, setIsMobile] = useState();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 650) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
  }, []);

  const contentAmount = (content) => {
    if (content.Titles.length > 12) {
      return true;
    }
  };

  return (
    <div className="landing-main">
      <HighlightCarousel content={data} />

      {data.TitleRows.map((content, i) => (
        <div key={i}>
          <div className="view-more-text">
            {" "}
            <h2
              style={{
                color: "#969696",
                display: "inline-block",
                margin: "5px 0 5px 25px",
              }}
            >
              {content.Name.toUpperCase()}
            </h2>
            <p
              style={
                !isMobile && contentAmount(content)
                  ? {
                      display: "inline-block",
                      color: "#00AEEF",
                      marginLeft: "10px",
                    }
                  : { display: "none" }
              }
            >
              VIEW ALL ({content.Titles.length})
            </p>
          </div>{" "}
          <div
            className="view-more"
            style={
              isMobile && contentAmount(content)
                ? { display: "flex" }
                : { display: "none" }
            }
          >
            <FontAwesomeIcon
              className="mobile-view"
              onClick={() => {
                alert("VIew All Episodes Page");
              }}
              icon="sign-out-alt"
            />
            <p style={isMobile ? { paddingLeft: "5px" } : { display: "none" }}>
              ({content.Titles.length})
            </p>
          </div>
          <ListCarousel
            id={i}
            content={content.Titles}
            slidesToShow={5}
            slidesToScroll={5}
          />
         
        </div>
      ))}
    </div>
  );
}
export default LandingPage;
