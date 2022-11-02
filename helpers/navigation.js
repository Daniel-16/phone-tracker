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
}

function errorOnPosition() {
  console.log("Error on loading location");
}
