import React from "react";
import { useState } from "react";

const BookingForm = (props) => {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };
  return (
    <header>
      <section className="book-form">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="book-date">Choose date</label>
            <input
              id="book-date"
              value={date}
              onChange={(e) => handleChange(e.target.value)}
              type="date"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="book-time">Choose time</label>
            <select
              id="book-time"
              value={times}
              onChange={(e) => setTimes(e.target.value)}
              required
            >
              <option value="">Select a Time</option>
              {props.availableTimes.availableTimes.map((availableTimes) => {
                return <option key={availableTimes}>{availableTimes}</option>;
              })}
            </select>
          </div>
          <div>
            <label htmlFor="book-guests">Number of guests</label>
            <input
              type={"number"}
              placeholder={"1"}
              min="1"
              max={"10"}
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="book-occasion">Occasion</label>
            <select
              id="book-occasion"
              key={occasion}
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
            >
              <option>Select occasion</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Octoberfest</option>
            </select>
            <div className="btnForm">
              <input
                aria-label="On Click"
                type={"submit"}
                value={"Make Your reservation"}
              ></input>
            </div>
          </div>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
