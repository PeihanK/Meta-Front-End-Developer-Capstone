import React, { useReducer } from "react";
import Booking from "./Booking";

const initialState = {
  availableTimes: ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return {
        ...state,
        availableTimes: action.payload,
      };
    default:
      return state;
  }
};

const ParentComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const updateTimes = (date) => {
    const newTimes = ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]; // Example updated times
    dispatch({ type: "UPDATE_TIMES", payload: newTimes });
  };

  return (
    <div>
      <Booking
        availableTimes={state.availableTimes}
        dispatch={updateTimes}
        submitForm={submitForm}
      />
    </div>
  );
};

export default ParentComponent;
