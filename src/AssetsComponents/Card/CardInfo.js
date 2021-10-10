import React from "react";
// import "./CarSpanInfo.css";

function CardInfo(id) {
  return (
    <div className="CarSpanInfo">
        <span   itemID={id}>{id} </span>
    </div>
    
    )
}

export default CardInfo;