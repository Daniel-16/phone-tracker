function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.error("Navigation is inactive");
  }
}
function showPosition(position) {
  console.log(position.coords.longitude);
  console.log(position.coords.latitude);
}
