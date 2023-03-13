/**
 * Helper function to create a random number to assign to IDs
 *
 * @returns Random number between 0 and 63
 */
const getRandomArbitrary = () => {
  return (Math.random() * (64 - 1) + 1).toString();
};

export default getRandomArbitrary;
