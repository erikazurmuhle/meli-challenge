const router = require("express").Router();

const singleProduct = require("../controllers/singleProductsControllers");

router.get("/:id", singleProduct);
module.exports = router;
