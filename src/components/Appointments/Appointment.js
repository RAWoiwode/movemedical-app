import "./Appointment.css";
import AppointmentDateTime from "./AppointmentDateTime";

const Appointment = (props) => {
  return (
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
        <button
          type="button"
          onClick={() => {
            if (window.confirm("Are you sure you want to delete this item?"))
              props.onDelete(props.id);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Appointment;
