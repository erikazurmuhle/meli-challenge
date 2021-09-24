const router = require("express").Router();

const {
  ProductDescription,
} = require("../controllers/productDescriptionController");
const { SingleProduct } = require("../controllers/singleProductController");

router.get("/:id/description", ProductDescription);
router.get("/:id", SingleProduct);

module.exports = router;
