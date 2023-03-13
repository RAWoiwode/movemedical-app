import "./AppointmentDateTime.css";

const AppointmentDateTime = (props) => {
  const month = props.dateTime.toLocaleString("en-US", { month: "short" });
  const day = props.dateTime.toLocaleString("en-US", { day: "2-digit" });
  const year = props.dateTime.getFullYear();
  const time = props.dateTime.toLocaleTimeString("en-US", {
    timeStyle: "short",
  });
  return (
    <div className="appointment-date-time">
      <div className="appointment-date-time__date">
        {month} {day}, {year}
      </div>
      <div className="appointment-date-time__time">&#x40;{time}</div>
      <hr />
      {props.children}
    </div>
  );
};

export default AppointmentDateTime;
