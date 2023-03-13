import "./Appointments.css";
import AppointmentList from "./AppointmentList";

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
