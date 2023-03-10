import { useState } from "react";
import "./Appointment.css";
import AppointmentDateTime from "./AppointmentDateTime";
import AppointmentEditForm from "../NewAppointment/AppointmentEditForm";

/**
 * Component to display appointment info.
 * Also conditionally render edit form is user wants to edit an appointment.
 *
 * @param {Object} props
 * @returns
 */
const Appointment = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  /**
   * Change isEditing flag if edit button is clicked.
   */
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  /**
   * Change isEditing flag if cancel button is clicked.
   */
  const cancelEditingHandler = () => {
    setIsEditing(false);
  };

  /**
   * Pass appointment data up to save. Change isEditing flag.
   *
   * @param {Object} appointmentData
   */
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
            <div className="appointment__buttons">
              <button
                className="appointment__edit"
                type="button"
                onClick={startEditingHandler}
              >
                Edit
              </button>
              <button
                className="appointment__delete"
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
