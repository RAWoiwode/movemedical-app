import Appointment from "./Appointment";

const AppointmentList = (props) => {
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
