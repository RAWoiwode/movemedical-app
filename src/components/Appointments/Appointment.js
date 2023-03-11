import "./Appointment.css";
import AppointmentDateTime from "./AppointmentDateTime";

const Appointment = (props) => {
  // TODO: Possibly extract a DateTime component to make this sleeker
  return (
    <li key={props.id}>
      <div className="appointment">
        <AppointmentDateTime dateTime={props.dateTime} />
        <h4>{props.location}</h4>
        <p>{props.description}</p>
      </div>
    </li>
  );
};

export default Appointment;
