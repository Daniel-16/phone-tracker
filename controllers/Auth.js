const UserModel = require("../model/index");

//No point using JWT as user token is not required.
// const create_token = (_id) => {
//   return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "4d" });
// };

exports.signup = async (req, res) => {
  const { phoneNumber, userLong, userLat } = req.body;
  try {
    const user = await UserModel.create({
      phoneNumber,
      userLong,
      userLat,
    });
    // const token = create_token(user._id);
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

exports.findPhone = async (req, res) => {
  const { phoneNumber } = req.body;
  try {
    const user = await UserModel.findOne({ phoneNumber });
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(401).json({
      error,
    });
  }
};

exports.updateLocation = async (req, res) => {
  const { userLong, userLat } = req.body;
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
