import React from "react";
import "./RideCard.css"; 

const RideCard = () => {
  return (
    <div className="ride-card">
      
      <div className="row">
        <div className="time-section">
          <p className="time-text">12:00</p>
          <p className="address-text">Vincennes</p>
          <p className="sub-address-text">18 Av. du Château</p>
        </div>
        <div className="duration-section">
          <p className="duration-text">2h20</p>
        </div>
        <div className="time-section">
          <p className="time-text">14:20</p>
          <p className="address-text">La Bassée</p>
          <p className="sub-address-text">16 Rue Henri Dunant</p>
        </div>
      </div>

      {/* Driver Info and Price */}
      <div className="row">
        <div className="driver-info">
          <img
            src="https://via.placeholder.com/50"
            alt="Driver"
            className="driver-image"
          />
          <div>
            <p className="driver-name">Philippe</p>
            <p className="rating">⭐ 5.0</p>
            <p className="super-driver">Super Driver</p>
          </div>
        </div>
        <p className="price">30 €</p>
      </div>
      
    </div>
    
    
  );
};

export default RideCard;
