const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
  },
  userLong: {
    type: String,
  },
  userLat: {
    type: String,
  },
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
