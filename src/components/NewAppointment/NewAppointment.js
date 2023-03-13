import "./NewAppointment.css";
import AppointmentForm from "./AppointmentForm";
import { useState } from "react";
import { getRandomArbitrary } from "../../utility/Utility";

/**
 * Component to hold the form for creating a new appointment.
 * Conditionally render either the button to display the form or the form itself.
 *
 * @param {Object} props
 * @returns A card containing a button or a form to add a new appointment
 */
const NewAppointment = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  /**
   * Add ID to the appointment data before passing it up to be saved to the list.
   * Set isEditing flag.
   *
   * @param {Object} enteredAppointmentData
   */
  const saveAppointmentDataHandler = (enteredAppointmentData) => {
    const appointmentData = {
      ...enteredAppointmentData,
      id: getRandomArbitrary(),
    };

    props.onAddAppointment(appointmentData);
    setIsEditing(false); // Close New Appointment Form
  };

  /**
   * Set isEditing flag if adding new appointment.
   */
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  /**
   * Set isEditing flag if cancel button is clicked.
   */
  const cancelEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-appointment">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Appointment</button>
      )}
      {isEditing && (
        <AppointmentForm
          onSaveAppointmentData={saveAppointmentDataHandler}
          onCancel={cancelEditingHandler}
        />
      )}
    </div>
  );
};

export default NewAppointment;
