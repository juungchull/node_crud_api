const mongoose = require("mongoose");

const product = mongoose.model(
  "Product",
  mongoose.Schema(
    {
      productName: String,
      productDescription: String,
      productPrice: Number,
      productImage: String,
    },
    {
      timestamps: true,
    }
  )
);

module.exports = {
  product,
};
