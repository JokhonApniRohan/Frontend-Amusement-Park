import "./Rides_style.css"
import React from 'react';
// import Header from "../components/Header";

function Ridebox(props) {
  const { imageSrc, name, description, price, availableTickets } = props;

  return (

      <div className="ride-box">
        <div className="image-container">
          <img src={imageSrc} alt={name} />
        </div>
        <div className="ride-details">
          <p className="name">{name}</p>
          <p className="description">{description}</p>
          <p className="price">Price: {price}</p>
          <p className="available-tickets">Available Tickets: {availableTickets}</p>
        </div>
      </div>

  );
}

export default Ridebox;
