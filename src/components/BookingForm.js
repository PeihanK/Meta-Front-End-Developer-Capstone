import React, { useState } from "react";

const BookingForm = (props) => {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e) => {
    setDate(e.target.value);
    props.dispatch(e.target.value);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset className="bookForm">
            <div>
              <label htmlFor="book-date">Choose date</label>
              <input
                id="book-date"
                value={date}
                onChange={handleChange}
                type="date"
                required
              />
            </div>
            <div>
              <label htmlFor="book-time">Choose time</label>
              <select
                id="book-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              >
                <option value="">Select a Time</option>
                {props.availableTimes && props.availableTimes.map((availableTime, index) => (
                  <option key={index} value={availableTime}>
                    {availableTime}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="book-guests">Number of guests</label>
              <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="book-occasion">Occasion</label>
              <select
                id="book-occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
              >
                <option value="">Select occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="btnForm">
              <input
                aria-label="On Click"
                type="submit"
                value="Make Your reservation"
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
