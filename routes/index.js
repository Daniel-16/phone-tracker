const express = require("express");
const {
  signup,
  findPhone,
  updateLocation,
  login,
} = require("../controllers/Auth");
const router = express.Router();

router.post("/signup", signup);
router.get("/find-phone/:number", findPhone);
router.post("/update-location", updateLocation);
router.post("/login", login);

module.exports = router;
