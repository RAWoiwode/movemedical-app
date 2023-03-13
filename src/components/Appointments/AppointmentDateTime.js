import "./AppointmentDateTime.css";

const AppointmentDateTime = (props) => {
  const tempDateTime = new Date(props.dateTime);
  const month = tempDateTime.toLocaleString("en-US", {
    month: "short",
  });
  const day = tempDateTime.toLocaleString("en-US", {
    day: "numeric",
  });
  const year = tempDateTime.toLocaleString("en-US", {
    year: "numeric",
  });
  const time = tempDateTime.toLocaleTimeString("en-US", {
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
