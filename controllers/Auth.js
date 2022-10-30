const UserModel = require("../model/index");
exports.login = async (req, res) => {
  const { phoneNumber, userLong, userLat } = req.body;
  try {
    const user = await UserModel.create({
      phoneNumber,
      userLong,
      userLat,
    });
    res.status(201).json({
      success: true,
      user,
    });
  } catch (err) {
    res.status(401).json({
      err,
    });
  }
};
