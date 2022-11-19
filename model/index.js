const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.statics.login = async function (phoneNumber, password) {
  if (!phoneNumber || !password) {
    throw Error("Invalid phone number or password. All fields must be filled");
  }
  const user = await this.findOne({ phoneNumber });
  if (!user) {
    throw Error("Incorrect phone number");
  }
  //Match passwords
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }
  return user;
};

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
