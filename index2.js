const { printPassTimes } = require("./index");

const { fetchISSTimesForMYLocation } = require("./iss-promised");

fetchISSTimesForMYLocation()
  .then((passtimes) => {
    printPassTimes(passtimes);
  })
  .catch((error) => {
    console.log("It didnt work", error.message);
  });
// fetchMyIp()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then((body) => console.log(body));
