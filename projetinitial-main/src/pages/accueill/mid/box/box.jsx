import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import "./box.css";

const Box = ({ onSelectTrip, filters }) => {
  const [trips, setTrips] = useState([]);

  // Récupération des trajets depuis Firebase
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "trips"));
        const tripsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTrips(tripsData);
      } catch (error) {
        console.error("Error fetching trips: ", error);
      }
    };

    fetchTrips();
  }, []);

  // Filtrage des trajets en fonction des critères
  const filteredTrips = trips.filter((trip) => {
    const matchesFrom =
      !filters.from || trip.from.toLowerCase().includes(filters.from.toLowerCase());
    const matchesTo =
      !filters.to || trip.to.toLowerCase().includes(filters.to.toLowerCase());
    const matchesDate = !filters.date || trip.date === filters.date;

    return matchesFrom && matchesTo && matchesDate;
  });

  const handleClick = (trip) => {
    onSelectTrip(trip);
  };

  return (
    <div className="trip-list centered">
      {filteredTrips.length > 0 ? (
        filteredTrips.map((trip) => (
          <div
            key={trip.id}
            className="trip-card styled-trip-card"
            onClick={() => handleClick(trip)}
          >
            <div className="trip-card-header">
              <div className="trip-time">
                <span>{trip.departureTime}</span>
                <span className="trip-duration"> - {trip.duration} - </span>
                <span>{trip.arrivalTime}</span>
              </div>
              <div>
                <span>nbre de places {trip.places}</span>
              </div>
              <div className="trip-route">
                <span>{trip.from}</span>
                <span className="trip-arrow">→</span>
                <span>{trip.to}</span>
              </div>
            </div>
            <div className="trip-card-body">
              <div className="trip-driver">
                <img
                  src={trip.image}
                  alt={`Driver ${trip.driver}`}
                  className="driver-avatar"
                />
                <div className="driver-info">
                  <span className="driver-name">{trip.name}</span>
                  <span className="driver-rating">★ {trip.rating}</span>
                </div>
                
              </div>
              <div className="trip-price">
                {trip.price ? (
                  <span className="price">{trip.price} dt</span>
                ) : (
                  <span className="status">{trip.status}</span>
                )}
                <br />
                <span className="status">{trip.date}</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Aucun trajet trouvé</p>
      )}
    </div>
  );
};

export default Box;
