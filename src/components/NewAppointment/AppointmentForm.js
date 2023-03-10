import { useState } from "react";
import "./AppointmentForm.css";

const AppointmentForm = (props) => {
  const [enteredDateTime, setEnteredDateTime] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const dateTimeChangeHandler = (event) => {
    setEnteredDateTime(event.target.value);
    enableSubmit();
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
    enableSubmit();
  };

  const locationChangeHandler = (event) => {
    setSelectedLocation(event.target.value);
    enableSubmit();
  };

  const submitHandler = (event) => {
    event.preventDefault(); // Don't let form submit and reload page in a default way

    const appointmentData = {
      dateTime: new Date(enteredDateTime),
      location: selectedLocation,
      description: enteredDescription,
    };

    console.log(appointmentData);
  };

  const enableSubmit = () => {
    const locationValid = selectedLocation !== "";
    const dateTimeValid = enteredDateTime !== "";
    const descriptionValid = enteredDescription !== "";
    setIsSubmitEnabled(locationValid && dateTimeValid && descriptionValid);
  };

  // TODO: This is running on every change; need to figure out a better way
  let minDate = new Date().toISOString();
  console.log(minDate);
  minDate = minDate.substring(0, minDate.length - 8); // Remove seconds through the z

  return (
    <form onSubmit={submitHandler}>
      <div className="new-appointment__inputs">
        <div>
          <label>DATE & TIME</label>
          <input
            min={minDate}
            onChange={dateTimeChangeHandler}
            required
            type="datetime-local"
          />
        </div>
        <div>
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
        <div>
          <label>DESCRIPTION</label>
          <textarea
            minLength={4}
            maxLength={256}
            onChange={descriptionChangeHandler}
            placeholder="Please enter a description"
            required
            rows={4}
            spellCheck={true}
          />
        </div>
      </div>
      <button type="button">Cancel</button>
      <button type="submit" disabled={!isSubmitEnabled}>
        Add Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;
