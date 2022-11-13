const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    unique: true,
    required: true,
  },
  userLong: {
    type: String,
  },
  userLat: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
