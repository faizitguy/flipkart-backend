const express = require("express");

const { addCategory, getCategories } = require("../controller/category");
const { adminMiddleware, requireSignin } = require("../middlewares/middleware");
const router = express.Router();

router.post("/category/create", requireSignin, adminMiddleware, addCategory);
router.get("/category/getcategory", getCategories);

module.exports = router;
