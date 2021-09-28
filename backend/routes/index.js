const router = require("express").Router();

const singleProductRoute = require("./singleProduct");
const searchRoute = require("./search");

router.use("/item", singleProductRoute);
router.use("/search", searchRoute);

module.exports = router;
