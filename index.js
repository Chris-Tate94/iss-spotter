const request = require("request");
const { fetchMyIP } = require("./iss");
const { fetchCoordsByIP } = require("./iss");

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned IP:", ip);
});

fetchCoordsByIP("185.203.218.145", (error, coordinates) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned coordinates:", coordinates);
});
