const Product = require("../model/product");

exports.getProducts = (req, res) => {
  Product.fetchAll()
    .then((products) => {
      res.render("product", {
        prods: products,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
