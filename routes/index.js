const express = require("express");
const { signup, findPhone } = require("../controllers/Auth");
const router = express.Router();

router.post("/signup", signup);
router.post("/find-phone", findPhone);

module.exports = router;
