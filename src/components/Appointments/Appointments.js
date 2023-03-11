import "./Appointments.css";
import AppointmentList from "./AppointmentList";

const Appointments = (props) => {
  return (
    <div className="appointments">
      <h1>Sample Scheduler App</h1>
      <AppointmentList
        items={props.appointmentList}
        onDelete={props.onDeleteAppointment}
        onSave={props.onSaveAppointment}
      />
    </div>
  );
};

export default Appointments;
