import React from "react";
import bookingImg from "../images/restaurant.jpg";
import { Link } from "react-router-dom";
import "../App.css";

const ConfirmedBooking = () => {
  return (
    <div className="confirmed">
      <div>
        <h1>Booking confirmed</h1>
      </div>
      <div className="booking-img">
        <img src={bookingImg} alt="" />
      </div>
      <Link to="/">
            <button aria-label="On Click">Go to Homepage</button>
          </Link>
    </div>
  );
};

export default ConfirmedBooking;
