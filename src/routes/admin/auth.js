const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  requireSignin,
} = require("../../controller/admin/auth");

const bcrypt = require("bcrypt");
const shortid = require("shortid");

router.post("/admin/signup", signup);
router.post("/admin/signin", signin);

module.exports = router;
