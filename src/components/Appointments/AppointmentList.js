import Appointment from "./Appointment";

const AppointmentList = (props) => {
  if (props.items.length === 0) {
    return <h2>No upcoming appointments</h2>;
  }

  return (
    <ul>
      {props.items.map((item) => (
        <Appointment
          key={item.id}
          date={item.date}
          time={item.time}
          location={item.location}
          description={item.description}
        />
      ))}
    </ul>
  );
};

export default AppointmentList;
