const express = require("express");
const router = express.Router();
const { signup, signin } = require("../controller/auth");

const bcrypt = require("bcrypt");
const shortid = require("shortid");

router.post("/signup", signup);
router.post("/signin", signin);

router.get("/profile", (req, res) => {
  res.status(200).json({ user: "profile" });
});

module.exports = router;
