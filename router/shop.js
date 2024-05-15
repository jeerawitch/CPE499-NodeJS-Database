const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shop");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/addproduct", (req, res) => {
  res.render("form");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/products", shopController.getProducts);

module.exports = router;
