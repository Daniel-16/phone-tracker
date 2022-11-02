const UserModel = require("../model/index");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition, errorOnPosition);
  } else {
    console.error("Navigation is inactive");
  }
}
async function showPosition(position, req, res) {
  console.log(position.coords.longitude);
  console.log(position.coords.latitude);
  try {
    const user = await UserModel.findOneAndUpdate(
      { phoneNumber: "09077234932" },
      {
        userLat: position.coords.latitude,
        userLong: position.coords.longitude,
      }
    );
    res.status(201).json({
      success: true,
      user,
    });
  } catch (err) {
    res.status(401).json({
      err,
    });
  }
}

function errorOnPosition() {
  console.log("Error on loading location");
}
