import React from "react";
import bookingImg from "../images/restaurant.jpg";
const ConfirmedBooking = () => {
  return (
    <div className="confirmed">
      <div>
        <h1>Booking confirmed</h1>
      </div>
      <div className="booking-img">
        <img src={bookingImg} alt=""></img>
      </div>
    </div>
  );
};
export default ConfirmedBooking;
