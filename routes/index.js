const express = require("express");
const { login } = require("../controllers/Auth");
const router = express.Router();

router.post("/signup", login);

module.exports = router;
