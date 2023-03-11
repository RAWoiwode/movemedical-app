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
    location: "Seatle",
    description: "Visit Starbucks",
  },
  {
    id: getRandomArbitrary(),
    dateTime: new Date("2024-06-20T10:10:00"),
    location: "London",
    description: "See Big Ben",
  },
  {
    id: getRandomArbitrary(),
    dateTime: new Date("2023-07-25T13:15:00"),
    location: "Orlando",
    description: "Beach time",
  },
];

console.log(DUMMY_APPOINTMENTS);

function App() {
  const [appointments, setAppointments] = useState(DUMMY_APPOINTMENTS);

  const addAppointmentHandler = (appointment) => {
    setAppointments((prevAppointments) => {
      return [...prevAppointments, appointment];
    });
  };

  return (
    <div>
      <Appointments appointmentList={appointments} />
      <NewAppointment onAddAppointment={addAppointmentHandler} />
    </div>
  );
}

export default App;
