import "./NewAppointment.css";
import AppointmentForm from "./AppointmentForm";
import { useState } from "react";
import getRandomArbitrary from "../../utility/Utility";

const NewAppointment = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveAppointmentDataHandler = (enteredAppointmentData) => {
    const appointmentData = {
      ...enteredAppointmentData,
      id: getRandomArbitrary(),
    };

    props.onAddAppointment(appointmentData);
    setIsEditing(false); // Close New Appointment Form
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

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
