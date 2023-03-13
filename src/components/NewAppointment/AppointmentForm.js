import { useState } from "react";
import "./AppointmentForm.css";

// Testing this outside of component to see the functionality
let minDate = new Date().toISOString();
minDate = minDate.substring(0, minDate.length - 8); // Remove seconds through the z

const AppointmentForm = (props) => {
  const [enteredDateTime, setEnteredDateTime] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const dateTimeChangeHandler = (event) => {
    setEnteredDateTime(() => event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const locationChangeHandler = (event) => {
    setSelectedLocation(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // Don't let form submit and reload page in a default way

    const appointmentData = {
      dateTime: new Date(enteredDateTime.toString()),
      location: selectedLocation,
      description: enteredDescription,
    };

    console.log(appointmentData);
    props.onSaveAppointmentData(appointmentData);

    // Clear inputs
    setEnteredDateTime("");
    setSelectedLocation("");
    setEnteredDescription("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-appointment__inputs">
        <div className="new-appointment__input">
          <label>DATE & TIME</label>
          <input
            min={minDate}
            onChange={dateTimeChangeHandler}
            required
            type="datetime-local"
          />
          <label>LOCATION</label>
          <select id="locations" onChange={locationChangeHandler} required>
            <option value="">Please select a city</option>
            <option value="London">London</option>
            <option value="Orlando">Orlando</option>
            <option value="Portland">Portland</option>
            <option value="San Diego">San Diego</option>
            <option value="Seattle">Seattle</option>
          </select>
        </div>
        <div className="new-appointment__input"></div>
        <div className="new-appointment__input">
          <label>DESCRIPTION</label>
          <textarea
            minLength={4}
            maxLength={256}
            onChange={descriptionChangeHandler}
            placeholder="Please enter a description"
            required
            rows={5}
            spellCheck={true}
          />
        </div>
      </div>
      <div className="new-appointment__buttons">
        <button
          className="new-appointment__cancel"
          type="button"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button type="submit">Add Appointment</button>
      </div>
    </form>
  );
};

export default AppointmentForm;
