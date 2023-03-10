import "./AppointmentForm.css";

const AppointmentForm = (props) => {
  return (
    <form>
      <div className="new-appointment__inputs">
        <div>
          <label>DATE & TIME</label>
          <input type="datetime-local" />
        </div>
        <div>
          <label>LOCATION</label>
          <select>
            <option value="London">London</option>
            <option value="Orlando">Orlando</option>
            <option value="Portland">Portland</option>
            <option value="San Diego">San Diego</option>
            <option value="Seattle">Seattle</option>
          </select>
        </div>
        <div>
          <label>DESCRIPTION</label>
          <textarea />
        </div>
      </div>
      <button type="button">Cancel</button>
      <button type="submit">Add Appointment</button>
    </form>
  );
};

export default AppointmentForm;
