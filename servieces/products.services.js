const { product } = require("../models/products.model");

async function createProduct(params, callback) {
  if (!params.productName) {
    return callback(
      {
        message: "Product Name Reqired",
      },
      ""
    );
  }

  const productModel = product(params);
  productModel
    .save()
    .then((response) => {
      return callback(null, response);
    })
    .catch((err) => {
      return callback(err);
    });
}

async function getProducts(params, callback) {
  const productName = params.productName;
  var condition = productName
    ? {
        productName: { $regex: new RegExp(productName), $option: "i" },
      }
    : {};

  const productModel = product(params);
  productModel
    .save()
    .then((response) => {
      return callback(null, response);
    })
    .catch((err) => {
      return callback(err);
    });
}

async function getProductById(params, callback) {
  const productId = params.productId;

  productModel
    .findById(productId)
    .then((response) => {
      if (!response) callback("product Id Invalid");
      else return callback(null, response);
    })
    .catch((err) => {
      return callback(err);
    });
}

async function updateProduct(params, callback) {
  const productId = params.productId;

  productModel
    .findByIdAndUpdate(productId, params, { useFindAndModify: false })
    .then((response) => {
      if (!response) callback("product Id Invalid");
      else return callback(null, response);
    })
    .catch((err) => {
      return callback(err);
    });
}

async function deleteProduct(params, callback) {
  const productId = params.productId;

  productModel
    .findByAndRemove(productId)
    .then((response) => {
      if (!response) callback("product Id Invalid");
      else return callback(null, response);
    })
    .catch((err) => {
      return callback(err);
    });
}

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
