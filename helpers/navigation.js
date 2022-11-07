// import UserModel from "../model/index";
// const axios = require("axios");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition, errorOnPosition);
  } else {
    console.error("Navigation is inactive");
  }
}
function showPosition(position) {
  console.log(position.coords.longitude);
  console.log(position.coords.latitude);
  const userLong = position.coords.longitude;
  const userLat = position.coords.latitude;
  console.log(`User Longitude is ${userLong} and the Latitude is ${userLat}`);
  const url = "http://localhost:7000/api/signup";
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phoneNumber: "09077234933",
      userLat,
      userLong,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
}

function errorOnPosition() {
  console.log("Error on loading location");
}
