const express = require("express");
const { signup, findPhone, updateLocation } = require("../controllers/Auth");
const router = express.Router();

router.post("/signup", signup);
router.get("/find-phone", findPhone);
router.post("/update-location", updateLocation);

module.exports = router;
