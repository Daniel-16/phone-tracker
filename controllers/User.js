const UserModel = require("../model/index");

exports.findUser = async (req, res) => {
  const { phoneNumber } = req.body;
  try {
    const user = await UserModel.findOne({ phoneNumber });
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
