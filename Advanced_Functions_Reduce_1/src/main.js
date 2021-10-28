/*
  Complete the functions below as detailed in the instructions.

  When one of the function parameters refers to a `park`, assume it is an object of the following shape:
  {
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: {
      state: "Maine"
    }
  }
*/

function squareKmTotal(parks) {
  let accumulator = 0;
  const result = parks.reduce(
    (acc, park) => acc + park.areaInSquareKm,
    accumulator
  );
  return result;
}

function parkNameAndState(parks) {
  const result = parks.reduce((acc, park) => {
    acc[park.name] = park.location.state;
    return acc;
  }, {});
  return result;
}

function parkByState(parks) {
  parks.sort((parkA, parkB) =>
    parkA.location.state.toLowerCase() > parkB.location.state.toLowerCase()
      ? 1
      : -1
  );
  const result = parks.reduce((acc, park) => {
    const state = park.location.state;
    acc[state] ? acc[state].push(park) : acc[state] = [park];
    return acc;
  }, {});
  console.log(result);
  return result;
}

module.exports = { squareKmTotal, parkNameAndState, parkByState };
