const getRandomArbitrary = () => {
  console.log((Math.random() * (64 - 1) + 1).toString());
  return (Math.random() * (64 - 1) + 1).toString();
};

export default getRandomArbitrary;
