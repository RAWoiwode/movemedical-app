/**
 * Helper function to create a random number to assign to IDs
 *
 * @returns Random number between 0 and 63
 */
const getRandomArbitrary = () => {
  return (Math.random() * (64 - 1) + 1).toString();
};

const dateTimeInputDisplay = (dateTime) => {
  let temp = new Date(dateTime);
  // Need to account for the Timezone offset or else the "wrong" time will be displayed in the input.
  // I would like to implement this in a more global friendly way
  let dateTimeDisplay = new Date(
    temp.setHours(temp.getHours() - temp.getTimezoneOffset() / 60)
  ).toISOString();
  dateTimeDisplay = dateTimeDisplay.substring(0, dateTimeDisplay.length - 8);
  return dateTimeDisplay;
};

const minDateTimeInputDisplay = () => {
  let temp = new Date();
  // Need to account for the Timezone offset or else the "wrong" time will be displayed in the input.
  // I would like to implement this in a more global friendly way
  let dateTimeDisplay = new Date(
    temp.setHours(temp.getHours() - temp.getTimezoneOffset() / 60)
  ).toISOString();
  dateTimeDisplay = dateTimeDisplay.substring(0, dateTimeDisplay.length - 8);
  return dateTimeDisplay;
};

export { getRandomArbitrary, dateTimeInputDisplay, minDateTimeInputDisplay };
