const ProductCtrl = {}
const Product = require('../schema/product.schema')

ProductCtrl.searchAll = async (req, res) => {
  
  Product.find({})
    .then((products) => {
      return res.status(200).json({
        ok: true,
        statusCode: 200,
        data: products,
      });
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json({
        error: 'Error al obtener los productos'
      })
    });
}

ProductCtrl.searchBySKU = async (req, res) => {
  const sku = req.params.sku;

  Product.find({ SKU: sku })
    .then((product) => {
      if(!product) {
        return res.status(400).json({error: 'No se ha encontrado el producto'})
      }
      return res.status(200).json({
        ok: true,
        statusCode: 200,
        data: product,
      });
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json({
        error: 'Error al obtener el producto'
      })
    });
}

module.exports = ProductCtrl