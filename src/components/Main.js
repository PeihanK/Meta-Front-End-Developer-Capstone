import React, { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ConfirmedBooking from "./ConfirmedBooking";
import Booking from "./BookingForm";
import Header from "./Header";

const Main = () => {
  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };

  const submitAPI = function (formData) {
    return true;
  };

  const updateTimes = (availableTimes, action) => {
    if (action) {
      return { availableTimes: fetchAPI(new Date(action)) };
    }
    return { availableTimes: fetchAPI(new Date()) };
  };

  const initializeTimes = { availableTimes: fetchAPI(new Date()) };
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed-booking");
    }
  };

  return (
    <>
      <Routes>
        <Route
          path="/booking"
          element={
            <Booking
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
      <Header />
    </>
  );
};

export default Main;
