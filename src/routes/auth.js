const express = require("express");
const router = express.Router();
const { signup, signin, requireSignin } = require("../controller/auth");

const bcrypt = require("bcrypt");
const shortid = require("shortid");

router.post("/signup", signup);
router.post("/signin", signin);

module.exports = router;
