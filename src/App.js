import { useState } from "react";
import "./App.css";
import Appointments from "./components/Appointments/Appointments";
import NewAppointment from "./components/NewAppointment/NewAppointment";
import getRandomArbitrary from "./utility/Utility";

const DUMMY_APPOINTMENTS = [
  {
    id: getRandomArbitrary(),
    date: new Date(2023, 3, 10),
    time: "2:30PM",
    location: "San Diego",
    description: "an appointment",
  },
  {
    id: getRandomArbitrary(),
    date: new Date(2023, 4, 1),
    time: "10:30AM",
    location: "Seatle",
    description: "Visit Starbucks",
  },
  {
    id: getRandomArbitrary(),
    date: new Date(2023, 6, 18),
    time: "4:45PM",
    location: "London",
    description: "See Big Ben",
  },
  {
    id: getRandomArbitrary(),
    date: new Date(2023, 3, 20),
    time: "7:30AM",
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
