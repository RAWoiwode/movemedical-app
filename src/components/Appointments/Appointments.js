import AppointmentList from "./AppointmentList";

const Appointments = (props) => {
  return (
    <div>
      <AppointmentList items={props.appointmentList} />
    </div>
  );
};

export default Appointments;
