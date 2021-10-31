import React, { useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import {setList,setChevron} from '../redux/slices/listSlice'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./seriescard.css";

export default function SeriesCard(props) {
  const { content } = props;
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch()
  const list = useSelector((state) => state.list.list)
  const chevron = useSelector((state) => state.list.chevron)

const closeAllInfoSegments = () => {
  if(document.querySelectorAll(".series-card-info")){
  const detailsBottomButtons = document.querySelectorAll(".details-bottom-buttons")
  const infoSegments = document.querySelectorAll(".series-card-info")
  infoSegments.forEach(el => {
    el.style.display = "none"
  });
  detailsBottomButtons.forEach(el => {
    el.style.display = "none"
  });
}
}
const updateDetails = () => {
  if(chevron === null){
    props.setShowInfo(!props.showInfo);

  }
  dispatch(setChevron(content.Id))
  dispatch(setList(props.id))
  
  if(chevron === content.Id){
    props.setShowInfo(!props.showInfo);

  }
  else if(list !== null && list !== props.id){
    closeAllInfoSegments()
    props.setShowInfo(false);
    props.setShowInfo(!props.showInfo)
  }
  props.updateSeriesInfo(content)
}


 
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
            onClick={()=>{
              updateDetails()
            }}
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
