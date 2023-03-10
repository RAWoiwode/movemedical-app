import "./App.css";
import Appointments from "./components/Appointments/Appointments";

const DUMMY_APPOINTMENTS = [
  {
    id: "1",
    date: new Date(2023, 3, 10),
    time: "2:30PM",
    location: "San Diego",
    description: "an appointment",
  },
  {
    id: "2",
    date: new Date(2023, 4, 1),
    time: "10:30AM",
    location: "Seatle",
    description: "Visit Starbucks",
  },
  {
    id: "3",
    date: new Date(2023, 6, 18),
    time: "4:45PM",
    location: "London",
    description: "See Big Ben",
  },
  {
    id: "4",
    date: new Date(2023, 3, 20),
    time: "7:30AM",
    location: "Orlando",
    description: "Beach time",
  },
];

function App() {
  return (
    <div>
      <Appointments appointmentList={DUMMY_APPOINTMENTS} />
    </div>
  );
}

export default App;
