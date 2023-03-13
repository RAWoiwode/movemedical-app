import { useState } from "react";
import "./AppointmentForm.css";
import { dateTimeInputDisplay } from "../../utility/Utility";

// Only want this to run once per component call
let minDate = new Date().toISOString();
let minDateTimeValidation = dateTimeInputDisplay(minDate);

/**
 * Component that handles the editing form for editing an appointment that is currently in the list.
 *
 * @param {Object} props
 * @returns Form to edit appointment data
 */
const AppointmentEditForm = (props) => {
  const [enteredDateTime, setEnteredDateTime] = useState(
    dateTimeInputDisplay(props.appointmentData.dateTime)
  );
  const [selectedLocation, setSelectedLocation] = useState(
    props.appointmentData.location
  );
  const [enteredDescription, setEnteredDescription] = useState(
    props.appointmentData.description
  );

  /**
   * Update the dateTime state.
   *
   * @param {Object} event
   */
  const dateTimeChangeHandler = (event) => {
    setEnteredDateTime(() => event.target.value);
  };

  /**
   * Update the description state.
   *
   * @param {Object} event
   */
  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  /**
   * Update the location state.
   *
   * @param {Object} event
   */
  const locationChangeHandler = (event) => {
    setSelectedLocation(event.target.value);
  };

  /**
   * Handle the form submission.
   * Create an appointment object to pass up to parent component.
   *
   * @param {Object} event
   */
  const submitHandler = (event) => {
    event.preventDefault(); // Don't let form submit and reload page in a default way

    const appointmentData = {
      dateTime: new Date(enteredDateTime).toISOString(),
      location: selectedLocation,
      description: enteredDescription,
      id: props.appointmentData.id,
    };

    props.onSaveAppointmentData(appointmentData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-appointment__inputs">
        <div className="new-appointment__input">
          <label>DATE & TIME</label>
          <input
            min={minDateTimeValidation}
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
      <div className="new-appointment__buttons">
        <button
          className="new-appointment__cancel"
          type="button"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button type="submit">Save Appointment</button>
      </div>
    </form>
  );
};

export default AppointmentEditForm;
