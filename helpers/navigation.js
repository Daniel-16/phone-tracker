function showPosition(position) {
  console.log(position.coords.longitude);
  console.log(position.coords.latitude);
  const userLong = position.coords.longitude;
  const userLat = position.coords.latitude;
  const accuracy = position.coords.accuracy;
  localStorage.setItem("userLat", userLat);
  localStorage.setItem("userLong", userLong);
  console.log(`User Longitude is ${userLong} and the Latitude is ${userLat} and accuracy is ${accuracy}`);
  // const url = "http://localhost:7000/api/update-location";
  // fetch(url, {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     phoneNumber: "09077234912",
  //     userLat,
  //     userLong,
  //   }),
  // })
  //   .then((res) => {
  //     res.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
}
// import UserModel from "../model/index";
// const axios = require("axios");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition, errorOnPosition);

    const url = "https://phone-tracker.onrender.com/api/signup";
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: "09077234912",
        userLat: localStorage.getItem("userLat"),
        userLong: localStorage.getItem("userLong"),
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
  } else {
    console.error("Navigation is inactive");
  }
}

function errorOnPosition() {
  console.log("Error on loading location");
}
