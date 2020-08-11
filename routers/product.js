const express = require("express");

const router = express.Router();
const productController = require("../controlers/product");

router.get("/", productController.get);

router.post("/", productController.postProduct);
router.delete("/:id", productController.deleteProduct);
router.patch("/:id", productController.editProduct);

module.exports = router;
