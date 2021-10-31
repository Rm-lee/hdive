import React, { useState, useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setList, setChevron, setShowInfo } from "../redux/slices/listSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./seriescard.css";

export default function SeriesCard(props) {
  const { content } = props;
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list.list);
  const chevron = useSelector((state) => state.list.chevron);
  const showInfo = useSelector((state) => state.list.showInfo);
  const elementRef = useRef();

  const closeAllInfoSegments = () => {
    if (document.querySelectorAll(".series-card-info")) {
      const detailsBottomButtons = document.querySelectorAll(
        ".details-bottom-buttons"
      );
      const infoSegments = document.querySelectorAll(".series-card-info");

      infoSegments.forEach((el) => {
        el.style.display = "none";
      });
      detailsBottomButtons.forEach((el) => {
        el.style.display = "none";
      });
    }
  };
  const updateDetails = () => {
    if (chevron === null) {
      dispatch(setShowInfo(!showInfo));
    }

    dispatch(setChevron(content.Id));
    dispatch(setList(props.id));

    if (chevron === content.Id) {
      dispatch(setShowInfo(!showInfo));
    }
    if (chevron !== content.Id && list === props.id) {
      dispatch(setShowInfo(true));
    }
    if (chevron !== content.Id && list !== props.id) {
      closeAllInfoSegments();
      dispatch(setShowInfo(true));
    } else if (list !== null && list !== props.id) {
      closeAllInfoSegments();
      dispatch(setShowInfo(false));
      dispatch(setShowInfo(!showInfo));
    }

    addHighlightToCard();
    props.updateSeriesInfo(content);
  };
  const addHighlightToCard = () => {
    const highlightedCards = document.querySelectorAll(".active-card-img");
    highlightedCards.forEach((el) => {
      el.classList.remove("active-card-img");
    });
    const activeCard = elementRef.current;
    activeCard.classList.add("active-card-img");
  };

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
            onClick={() => {
              updateDetails();
            }}
            icon="chevron-down"
          />
          <p className="series-card-title">{content.Name}</p>
        </div>

        <img
          ref={elementRef}
          key={content.Id}
          className="list-carousel-img"
          src={content.MasterArtUrl}
          alt="show img"
        />

      </div>
    </div>
  );
}
