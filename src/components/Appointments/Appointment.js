import "./Appointment.css";

const Appointment = (props) => {
  return (
    <li>
      <div className="appointment">
        <h2>
          {props.date.toLocaleString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
          })}
        </h2>
        <h3>{props.time}</h3>
        <h4>{props.location}</h4>
        <p>{props.description}</p>
      </div>
    </li>
  );
};

export default Appointment;
