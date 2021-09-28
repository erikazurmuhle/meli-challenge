const router = require("express").Router();

const searchProducts = require("../controllers/searchControllers");

router.get("/:input", searchProducts);

module.exports = router;
