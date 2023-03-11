import { useState } from "react";
import "./AppointmentForm.css";

// Testing this outside of component to see the functionality
let minDate = new Date().toISOString();
minDate = minDate.substring(0, minDate.length - 8); // Remove seconds through the z

const AppointmentEditForm = (props) => {
  const [enteredDateTime, setEnteredDateTime] = useState(() => {
    let temp = new Date(props.appointmentData.dateTime).toISOString();
    temp = temp.substring(0, temp.length - 8);
    return temp;
  });
  const [selectedLocation, setSelectedLocation] = useState(
    props.appointmentData.location
  );
  const [enteredDescription, setEnteredDescription] = useState(
    props.appointmentData.description
  );

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
      id: props.appointmentData.id,
    };

    console.log(appointmentData);
    props.onSaveAppointmentData(appointmentData);
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
            defaultValue={enteredDateTime}
          />
          <label>LOCATION</label>
          <select
            id="locations"
            onChange={locationChangeHandler}
            required
            value={selectedLocation}
          >
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
            value={enteredDescription}
          />
        </div>
      </div>
      <div>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Save Appointment</button>
      </div>
    </form>
  );
};

export default AppointmentEditForm;
