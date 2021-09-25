const router = require("express").Router();

const singleProductRoute = require("./singleProduct");
const searchRoute = require("./search");

router.use("/items", singleProductRoute);
router.use("/search", searchRoute);

module.exports = router;
