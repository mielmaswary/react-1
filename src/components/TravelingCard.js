import React from "react";

const TravelingCard = (props) => {
  const itemData = props.item;
  return (
    <div className="container">
      <div>
        <img src={itemData.imageUrl} alt="" />
      </div>
      <div className="main-info">
        <div className="locaiton">
          <div className="locaition-icon"></div>
          <div className="name">{itemData.location}</div>
          <a className="google-maps-link" href={itemData.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>

        <div className="h2">{itemData.title}</div>
        <div className="date">
          <div className="start-date">{itemData.startDate}</div>
          <div>-</div>
          <div className="end-date">{itemData.endDate}</div>
        </div>
        <div className="description">{itemData.description}</div>
      </div>
    </div>
  );
};

export default TravelingCard;
