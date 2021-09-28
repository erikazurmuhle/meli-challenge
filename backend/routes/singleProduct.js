const router = require("express").Router();

const singleProduct = require("../controllers/singleProductsControllers");

router.get("/", singleProduct);
module.exports = router;
