function showPosition(position) {
  console.log(position.coords.longitude);
  console.log(position.coords.latitude);
  const userLong = position.coords.longitude;
  const userLat = position.coords.latitude;
  const accuracy = position.coords.accuracy;
  localStorage.setItem("userLat", userLat);
  localStorage.setItem("userLong", userLong);
  const storeLat = localStorage.getItem("userLat");
  const storeLong = localStorage.getItem("userLong");
  console.log(
    `User Longitude is ${userLong} and the Latitude is ${userLat} and accuracy is ${accuracy}`
  );
  if (userLong && userLat != storeLat && storeLong) {
    console.log("User Location just changed");
  } else {
    console.log("User location remains the same");
  }
}
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
        phoneNumber,
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
