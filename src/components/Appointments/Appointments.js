import "./Appointments.css";
import AppointmentList from "./AppointmentList";

/**
 * Component to hold the current list of appointments.
 *
 * @param {Object} props
 * @returns Container to hold appintment list
 */

const Appointments = (props) => {
  return (
    <div className="appointments">
      <AppointmentList
        items={props.appointmentList}
        onDelete={props.onDeleteAppointment}
        onSave={props.onSaveAppointment}
      />
    </div>
  );
};

export default Appointments;
