const productServices = require("../servieces/products.services");
const upload = require("../middleware/upload");

exports.create = (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      next(err);
    } else {
      const url = req.protocol + "://" + req.get("host");
      const path =
        req.file != undefined ? req.file.path.replace(/\\/g, "/") : "";

      var model = {
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        productPrice: req.body.productPrice,
        productImage: path != "" ? url + "/" + path : "",
      };
      productServices.createProduct(model, (error, results) => {
        if (error) {
          return next(error);
        } else {
          return res.status(200).send({
            message: "Success",
            data: results,
          });
        }
      });
    }
  });
};
