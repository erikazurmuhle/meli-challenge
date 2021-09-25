const router = require("express").Router();

const { SearchProducts } = require("../controllers/searchController");

router.get("/:input", SearchProducts);

module.exports = router;
