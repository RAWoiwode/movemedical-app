import Appointment from "./Appointment";

const AppointmentList = (props) => {
  if (props.items.length === 0) {
    return <h2>No upcoming appointments</h2>;
  }

  // Sorting appointments from closest dateTime to farthest dateTime
  props.items.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));

  return (
    <ul>
      {props.items.map((item) => (
        <Appointment
          key={item.id}
          id={item.id}
          dateTime={item.dateTime}
          location={item.location}
          description={item.description}
          onDelete={props.onDelete}
          onSave={props.onSave}
        />
      ))}
    </ul>
  );
};

export default AppointmentList;
