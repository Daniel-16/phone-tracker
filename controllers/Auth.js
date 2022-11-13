const UserModel = require("../model/index");

//No point using JWT as user token is not required.
// const create_token = (_id) => {
//   return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "4d" });
// };

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
      password
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
