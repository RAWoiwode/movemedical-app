import { useState } from "react";
import "./App.css";
import Appointments from "./components/Appointments/Appointments";
import NewAppointment from "./components/NewAppointment/NewAppointment";
import getRandomArbitrary from "./utility/Utility";

const DUMMY_APPOINTMENTS = [
  {
    id: getRandomArbitrary(),
    dateTime: new Date(2023, 3, 14, 8, 30),
    location: "San Diego",
    description: "an appointment",
  },
  {
    id: getRandomArbitrary(),
    dateTime: new Date("2025-04-01T12:00:00"),
    location: "Seattle",
    description: "Visit Starbucks",
  },
  {
    id: getRandomArbitrary(),
    dateTime: new Date("2024-06-20T10:10:00"),
    location: "London",
    description:
      "See Big Ben, drink some tea, eat some fish and chips, and Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
      "Quis commodo odio aenean sed. Vitae ultricies leo integer malesuada.",
  },
  {
    id: getRandomArbitrary(),
    dateTime: new Date("2023-07-25T13:15:00"),
    location: "Orlando",
    description:
      "Beach time Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function App() {
  const [appointments, setAppointments] = useState(DUMMY_APPOINTMENTS);

  const addAppointmentHandler = (appointment) => {
    setAppointments((prevAppointments) => {
      return [...prevAppointments, appointment];
    });
  };

  const saveAppointmentHandler = (appointment) => {
    setAppointments((prevAppointments) => {
      const index = prevAppointments.findIndex(
        (prevAppointment) => prevAppointment.id === appointment.id
      );

      if (index !== -1) {
        prevAppointments[index] = appointment;
      }
      return [...prevAppointments];
    });
  };

  const deleteAppointmentHandler = (id) => {
    const newAppointments = appointments.filter(
      (appointment) => appointment.id !== id
    );
    setAppointments(newAppointments);
  };

  return (
    <div>
      <h1>Sample Scheduler App</h1>
      <Appointments
        appointmentList={appointments}
        onDeleteAppointment={deleteAppointmentHandler}
        onSaveAppointment={saveAppointmentHandler}
      />
      <NewAppointment onAddAppointment={addAppointmentHandler} />
    </div>
  );
}

export default App;
