import React from "react";
import "./SortFilter.css"; // Styles associés

const SortFilter = () => {
  return (
    <div className="filter-container">
      {/* Section de tri */}
      <div className="sort-section">
        <div className="section-header">
          <h3>Trier par</h3>
          <button className="clear-button">Tout effacer</button>
        </div>
        <div className="sort-options">
          <label className="sort-item">
            <input type="radio" name="sort" />
            <span>Départ le plus tôt</span>
            <i className="icon clock-icon"></i>
          </label>
          <label className="sort-item">
            <input type="radio" name="sort" />
            <span>Prix le plus bas</span>
            <i className="icon price-icon"></i>
          </label>
          <label className="sort-item">
            <input type="radio" name="sort" />
            <span>Proche du point de départ</span>
            <i className="icon walk-icon"></i>
          </label>
          <label className="sort-item">
            <input type="radio" name="sort" />
            <span>Proche du point d’arrivée</span>
            <i className="icon walk-icon"></i>
          </label>
          <label className="sort-item">
            <input type="radio" name="sort" />
            <span>Trajet le plus court</span>
            <i className="icon time-icon"></i>
          </label>
        </div>
      </div>

      {/* Section Heure de départ */}
      <div className="time-section">
        <h3>Heure de départ</h3>
        <div className="time-options">
          <label className="time-item">
            <input type="checkbox" />
            <span>12:01 - 18:00</span>
            <span className="count">45</span>
          </label>
          <label className="time-item">
            <input type="checkbox" />
            <span>Après 18:00</span>
            <span className="count">32</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SortFilter;
