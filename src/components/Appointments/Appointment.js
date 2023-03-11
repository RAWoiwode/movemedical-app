import { useState } from "react";
import "./Appointment.css";
import AppointmentDateTime from "./AppointmentDateTime";
import AppointmentEditForm from "../NewAppointment/AppointmentEditForm";

const Appointment = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const cancelEditingHandler = () => {
    setIsEditing(false);
  };

  const saveAppointmentHandler = (appointmentData) => {
    setIsEditing(false);
    props.onSave(appointmentData);
  };

  return (
    <div>
      {!isEditing && (
        <li>
          <div className="appointment">
            <AppointmentDateTime dateTime={props.dateTime}>
              <p>
                in <span>{props.location}</span>
              </p>
            </AppointmentDateTime>
            <div className="appointment__details">
              <article>{props.description}</article>
            </div>
            <button type="button" onClick={startEditingHandler}>
              Edit
            </button>
            <button
              type="button"
              onClick={() => {
                if (
                  window.confirm("Are you sure you want to delete this item?")
                )
                  props.onDelete(props.id);
              }}
            >
              Delete
            </button>
          </div>
        </li>
      )}
      {isEditing && (
        <AppointmentEditForm
          appointmentData={props}
          onSaveAppointmentData={saveAppointmentHandler}
          onCancel={cancelEditingHandler}
        />
      )}
    </div>
  );
};

export default Appointment;
