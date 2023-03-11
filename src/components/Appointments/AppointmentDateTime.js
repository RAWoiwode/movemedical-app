const AppointmentDateTime = (props) => {
  const month = props.dateTime.toLocaleString("en-US", { month: "long" });
  const day = props.dateTime.toLocaleString("en-US", { day: "2-digit" });
  const year = props.dateTime.getFullYear();
  const time = props.dateTime.toLocaleTimeString("en-US", {
    timeStyle: "short",
  });
  return (
    <div>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
      <div>{time}</div>
    </div>
  );
};

export default AppointmentDateTime;
