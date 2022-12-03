const UserModel = require("../model/index");

exports.signup = async (req, res) => {
  const { phoneNumber, userLong, userLat, password } = req.body;
  try {
    const exists = await UserModel.findOne({ phoneNumber });
    if (exists) {
      throw Error("This user already exists");
    }
    const user = await UserModel.create({
      phoneNumber,
      userLong,
      userLat,
      password,
    });
    res.status(201).json({
      success: true,
      user,
    });
  } catch (err) {
    res.status(401).json({
      err: err.message,
    });
  }
};

exports.findPhone = async (req, res) => {
  const number = req.params.number;
  try {
    const user = await UserModel.findOne({ phoneNumber: number });
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
};

exports.updateLocation = async (req, res) => {
  const { phoneNumber, userLong, userLat } = req.body;
  try {
    const user = await UserModel.findOneAndUpdate(
      { phoneNumber },
      {
        userLong,
        userLat,
      }
    );
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      error,
    });
  }
};

exports.login = async (req, res) => {
  const { phoneNumber, password } = req.body;
  try {
    const user = await UserModel.login(phoneNumber, password);
    res.status(201).json({
      success: true,
      user,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      error: err.message,
    });
  }
};
